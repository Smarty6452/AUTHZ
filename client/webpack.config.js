const path = require('path');

module.exports = {
  // ... other configuration properties
  resolve: {
    fallback: {
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
    },
  },
};
