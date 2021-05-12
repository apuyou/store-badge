// Copied from https://github.com/zouhir/preact-widget-scripts/blob/master/configs/babelrc.js
// which unfortunately does not support Babel 7

var isTest = (process.env.BABEL_ENV || process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [
    [
      require.resolve('babel-preset-env'),
      {
        loose: true,
        uglify: true,
        modules: isTest ? 'commonjs' : false,
        targets: {
          browsers: ['> 100%', 'last 200 versions', 'IE >= 19'],
        },
        exclude: ['transform-regenerator', 'transform-es2015-typeof-symbol'],
      },
    ],
    require.resolve('babel-preset-stage-1'),
  ],
  plugins: [
    require.resolve('babel-plugin-transform-object-assign'),
    require.resolve('babel-plugin-transform-decorators-legacy'),
    require.resolve('babel-plugin-transform-react-constant-elements'),
    require.resolve('babel-plugin-transform-react-remove-prop-types'),
    [require.resolve('babel-plugin-transform-react-jsx'), { pragma: 'h' }],
    [
      require.resolve('babel-plugin-jsx-pragmatic'),
      {
        module: 'preact',
        export: 'h',
        import: 'h',
      },
    ],
  ],
};
