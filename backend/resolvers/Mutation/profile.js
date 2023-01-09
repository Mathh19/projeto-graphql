const db = require('../../config/db');
const { profile: findProfile } = require('../Query/profile');

module.exports = {
  async newProfile(_, { data }) {
    try {
      const [id] = await db('profiles')
        .insert(data);

      return db('profiles')
        .where({ id })
        .first();
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  },
  async deleteProfile(_, args) {
    try {
      if (!args) return null;
      const profile = await findProfile(_, args);
      if (profile) {
        const { id } = profile;
        await db('users_profiles')
          .where({ profile_id: id }).delete();
        await db('profiles')
          .where({ id }).delete();
      }
      return profile;
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  },
  async updateProfile(_, { filter, data }) {
    try {
      if (!filter) return null;
      const profile = await findProfile(_, { filter });
      if (profile) {
        const { id } = profile;
        await db('profiles')
          .where({ id }).update(data);
      }
      return { ...profile, ...data };
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  }
}
