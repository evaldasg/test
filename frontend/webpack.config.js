function buildConfig(env) {
  env = (env === undefined) ? 'dev' : env
  return require('./config/webpack.' + env + '.js')({ env: env })
}

module.exports = buildConfig;
