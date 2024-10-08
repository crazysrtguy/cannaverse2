const webpack = require('webpack');

module.exports = {
    webpack: {
        configure: (config) => {
            config.resolve.fallback = {
                "crypto": require.resolve("crypto-browserify"),
                "stream": require.resolve("stream-browserify"),
                "path": require.resolve('path-browserify'),
                "assert": require.resolve("assert"),
                "os": require.resolve("os-browserify/browser"),
                "buffer": require.resolve("buffer"),
                "http": require.resolve('stream-http'),
                "https": require.resolve('https-browserify'),
                "zlib": require.resolve('browserify-zlib')
            };
            config.plugins = [
                ...config.plugins,
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],  // No trailing slash needed
                    process: 'process/browser'      // You might also need this for Node's `process` polyfill
                }),
            ];
            return config;
        }
    }
};
