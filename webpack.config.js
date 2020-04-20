/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.js',

  mode: 'production',

  output: {
    path: require('path').join(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      minSize: 1,
      chunks: 'all',
      cacheGroups: {
        common: {
          name: 'common',
          test: /common/,
          priority: 5,
        },
        module1: {
          name: 'module1',
          test: /module-1/,
          priority: 4,
          enforce: true
        },
        module2: {
          name: 'module2',
          test: /module-2/,
          priority: 4,
          enforce: true
        },
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 5
        }
      }
    }
  }
};
