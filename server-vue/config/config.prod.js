'use strict';

const customConfig = require('./config.custom');

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  config.logger = {
    dir: `${appInfo.baseDir}/logs/${appInfo.name}`,
  };

  const userConfig = Object.assign({
    appDesc: '',
  }, customConfig);

  return {
    ...config,
    userConfig,
  };
};
