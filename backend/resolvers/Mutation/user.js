const db = require('../../config/db');
const { profile: findProfile } = require('../Query/profile');
const { user: findUser, users } = require('../Query/user');

module.exports = {
  async newUser(_, { data }) {
    try {
      const idsProfiles = [];
      if (data.profiles) {
        for (let filter of data.profiles) {
          const profile = await findProfile(_, { filter });
          if (profile) idsProfiles.push(profile.id);
        }
      }

      // delete data.profiles;

      const [id] = await db('users')
        .insert({
          name: data.name,
          email: data.email,
          password: data.password
        });

      for (let profile_id of idsProfiles) {
        await db('users_profiles')
          .insert({ profile_id, user_id: id });
      }

      return db('users')
        .where({ id }).first();
    } catch (err) {
      throw new Error(err);
    }
  },
  async deleteUser(_, args) {
    try {
      const user = await findUser(_, args);
      if (user) {
        const { id } = user;
        await db('users_profiles')
          .where({ user_id: id }).delete();
        await db('users')
          .where({ id }).delete();
      }
      return user;
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  },
  async updateUser(_, { filter, data }) {
    try {
      const user = await findUser(_, { filter });
      if (user) {
        const { id } = user;
        if (data.profiles) {
          await db('users_profiles')
            .where({ user_id: id }).delete();
          for (let filter of data.profiles) {
            const profile = await findProfile(_, {
              filter
            });
            profile && await db('users_profiles')
              .insert({
                profile_id: profile.id,
                user_id: id
              })
          }
        }

        delete data.profiles
        await db('users')
          .where({ id })
          .update(data);
      }
      return !user ? null : { ...user, ...data }
    } catch (err) {
      throw new Error(err.sqlMessage);
    }
  }
}
