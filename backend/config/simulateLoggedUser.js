const db = require('./db');
const { getUserLogged } = require('../resolvers/common/user');

const sql = `
  select
    u.*
  from
    users u,
    users_profiles up,
    profiles p
  where
    up.user_id = u.id and
    up.profile_id = p.id and
    u.active = 1 and
    p.name = :nameProfile
  limit 1
`;

const getUser = async nameProfile => {
  const res = await db.raw(sql, { nameProfile });
  return res ? res[0][0] : null;
}

module.exports = async req => {
  const user = await getUser('admin');

  if(user) {
    const { token } = await getUserLogged(user);
    req.headers = {
      authorization: `Bearer ${token}`
    }
  }
}
