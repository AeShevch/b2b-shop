// const sass = require("rollup-plugin-scss");
// const postcss = require("rollup-plugin-postcss");
// const autoprefixer = require("autoprefixer");

module.exports = {
  input: 'src/js/app.js',
  output: {
    js: './js/bundle.js',
    css: './template_styles.css'
  },
  namespace: 'BX.',
  plugins: {
    resolve: true,
    custom: [
      // sass({
      //   processor: css => postcss({
      //     sourceMap: true,
      //     options: [
      //     autoprefixer()
      //   ]}),
      // })
    ],
  },
};
