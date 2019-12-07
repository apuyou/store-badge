export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = '[name].js';

  if (env.production) {
    config.output.libraryTarget = 'umd';
  }

  // Force all files to be inlined
  const fileLoaderRule = helpers.getLoadersByName(config, 'file-loader')[0];
  if (fileLoaderRule) {
    fileLoaderRule.rule.loader = 'url-loader';
  }
};
