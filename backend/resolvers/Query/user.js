const db = require('../../config/db')

module.exports = {
  async users() {
    return db('users');
  },
  async user(_, { filter }) {
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
