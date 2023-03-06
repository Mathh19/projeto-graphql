const bcrypt = require('bcrypt');
const db = require('../../config/db');
const { getUserLogged } = require('../common/user');
const { profile: findProfile } = require('../Query/profile');
const { user: findUser } = require('../Query/user');

const mutations = {
  async loginUser(_, { data }) {
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

    return await getUserLogged(user);
  },
  async registerUser(_, { data }) {
    return mutations.newUser(_, {
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        profiles: null
      }
    });
  },
  async newUser(_, { data }, ctx) {
    ctx && ctx.validateAdmin();
    try {
      const idsProfiles = [];

      if (!data.profiles || !data.profiles.length) {
        data.profiles = [{
          name: 'comum'
        }]
      }

      for (let filter of data.profiles) {
        const profile = await findProfile(_, { filter });
        if (profile) idsProfiles.push(profile.id);
      }

      const salt = bcrypt.genSaltSync();
      data.password = bcrypt.hashSync(data.password, salt);

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
      throw new Error('Usuário já registrado.');
    }
  },
  async deleteUser(_, args, ctx) {
    ctx && ctx.validateAdmin();
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
  async updateUser(_, { filter, data }, ctx) {
    ctx && ctx.validateFilterUser(filter);
    try {
      const user = await findUser(_, { filter });
      if (user) {
        const { id } = user;
        if (ctx.admin && data.profiles) {
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

        if (data.password) {
          const salt = bcrypt.genSaltSync();
          data.password = bcrypt.hashSync(data.password, salt);
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

module.exports = {
  mutations,
}
