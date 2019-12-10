const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

console.log('path: ', path.resolve(__dirname, '../packages/*'));

module.exports = ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
    ],
  });
  // config.module.rules.push({
  //   test: /\.scss$/,
  //   use: ['style-loader', 'css-loader', 'sass-loader'],
  //   include: path.resolve(__dirname, '../'),
  // });

  // config.resolve.enforceExtension = false;
  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
  config.resolve.alias["@hooks"] = path.resolve(__dirname, '../packages/hooks/src');
  config.resolve.alias["@antd"] = path.resolve(__dirname, '../packages/antd/src');

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin(),
  );

  // Return the altered config
  return config;
};
