const jwt = require('jwt-simple');

module.exports = async ({ req }) => {
  // Development
  // await require('./simulateLoggedUser')(req);

  const auth = req.headers.authorization;
  const token = auth && auth.substring(7);

  let user = null;
  let admin= false;

  if(token) {
    try {
      let tokenContent = jwt.decode(token, process.env.APP_AUTH_SECRET);
      if(new Date(tokenContent.exp * 1000) > new Date()) {
        user = tokenContent;
      }
    } catch (err) {

    }
  }

  if(user && user.profiles) {
    admin = user.profiles.includes('admin');
  }

  const err = new Error('Acesso negado!');

  return {
    user,
    admin,
    validateUser() {
      if(!user) throw err
    },
    validateAdmin() {
      if(!admin) throw err
    },
    validateFilterUser(filter) {
      if(admin) return;

      if(!user) throw err;
      if(!filter) throw err;

      const { id, email } = filter;
      if(!id && !email) throw err;
      if(id && id !== user.id) throw err;
      if(email && email !== user.email) throw err;
    }
  }
}
