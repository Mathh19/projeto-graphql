module.exports = async ({ req }) => {
  // Development
  await require('./simulateLoggedUser')(req)

  const auth = req.headers.authorization;
  console.log(auth);
}
