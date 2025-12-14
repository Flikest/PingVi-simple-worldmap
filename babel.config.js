module.exports = function (api) {
  const isTest = api.env('test');
  api.cache(true);

  return {
    presets: isTest
      ? [['@react-native/babel-preset', { disableImportExportTransform: true }]]
      : [
          ['@babel/preset-flow', { all: true }],
          'module:react-native-builder-bob/babel-preset',
        ],
  };
};
