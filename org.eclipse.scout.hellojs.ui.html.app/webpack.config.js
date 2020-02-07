const baseConfig = require('@eclipse-scout/cli/scripts/webpack-defaults');
module.exports = (env, args) => {
  args.resDirArray = [
    'node_modules/@eclipse-scout/core/res',
    'src/main/resources/WebContent'];
  const config = baseConfig(env, args);

  config.entry = {
    'hellojs': './src/main/js/hellojs.js',
    'login': './src/main/js/login.js',
    'logout': './src/main/js/logout.js',
    'hellojs-theme': './src/main/js/hellojs-theme.less'
  };

  return config;
};
