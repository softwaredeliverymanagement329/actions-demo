function createJwt() {
  return { token: "jwt", created: new Date() };
}

module.exports = createJwt;
