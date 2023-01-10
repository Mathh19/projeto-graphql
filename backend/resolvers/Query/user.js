const db = require('../../config/db');
const bcrypt = require('bcrypt');
const { getUserLogged } = require('../common/user');


module.exports = {
  async login(_, { data }) {
    const user = await db('users')
      .where({ email: data.email })
      .first();

    if(!user) {
      throw new Error('Usuário/Senha inválido');
    }

    const isEqual = bcrypt.compareSync(data.password, user.password);

    if(!isEqual) {
      throw new Error('Senha inválida');
    }

    return getUserLogged(user);
  },
  async users(parent, args, ctx) {
    ctx && ctx.validateAdmin();
    return db('users');
  },
  async user(_, { filter }, ctx) {
    ctx && ctx.validateFilterUser(filter);

    if (!filter) return null;
    const { id, email } = filter;

    if (id) {
      return db('users')
        .select('*')
        .where({ id })
        .first();
    } else if (email) {
      return db('users')
        .where({ email })
        .first();
    } else {
      return null;
    }
  },
}
