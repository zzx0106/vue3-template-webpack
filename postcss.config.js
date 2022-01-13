module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env'),
    require('cssnano')({
      cssnano: {
        zindex: false,
        autoprefixer: false, // 和cssnext同样具有autoprefixer，保留一个
      },
    }),
  ],
};
