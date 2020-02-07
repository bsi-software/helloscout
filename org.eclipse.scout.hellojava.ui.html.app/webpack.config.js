const baseConfig = require('@eclipse-scout/cli/scripts/webpack-defaults');
module.exports = (env, args) => {
  args.resDirArray = [
    'node_modules/@eclipse-scout/core/res',
    'src/main/resources/WebContent'];
  const config = baseConfig(env, args);

  config.entry = {
    'hellojava': './src/main/js/hellojava.js',
    'login': './src/main/js/login.js',
    'logout': './src/main/js/logout.js',
    'hellojava-theme': './src/main/js/hellojava-theme.less'
  };

  return config;
};
