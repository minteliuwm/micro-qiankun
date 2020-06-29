'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/main/v1/config', controller.config.index);

  router.get('*', controller.home.index);
};
