module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver", {
          "root": ["./src"],
          extensions: [
            '.js',
            '.jsx',
            '.android.js',
            '.ios.js',
            '.web.js'
          ],
          "alias": {
            "@/screens": "./src/screens",
            "@/layouts": "./src/layouts",
            "@/store": "./src/store",
            "@/components": "./src/components",
            "@/utils": "./src/utils",
            "@/interface": "./src/interface",
            "@/navigation": "./src/navigation",
            "@/client": "./src/client",
            "@/test": "./__tests__",
          }
        }
      ]
    ]
  };
};
