const env = {
  development: require("./development"),
  production: require("./production"),
  test: require("./test")
};

module.exports = env[process.env.NODE_ENV] || env.development;
