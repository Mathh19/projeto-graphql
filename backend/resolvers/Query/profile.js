const db = require('../../config/db')

module.exports = {
  async profiles(parent, args, ctx) {
    ctx && ctx.validateAdmin();
    return db('profiles');
  },
  async profile(_, { filter }, ctx) {
    ctx && ctx.validateAdmin();

    if (!filter) return null;
    const { id, name } = filter;

    if (id) {
      return db('profiles')
        .select('*')
        .where({ id })
        .first();
    } else if (name) {
      return db('profiles')
        .where({ name })
        .first();
    } else {
      return null;
    }
  }
}
