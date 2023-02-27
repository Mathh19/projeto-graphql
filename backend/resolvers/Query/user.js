const db = require('../../config/db');
const bcrypt = require('bcrypt');


module.exports = {
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
