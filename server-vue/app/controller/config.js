'use strict';

const Controller = require('egg').Controller;

class ConfigController extends Controller {
  async index() {
    const { ctx, config } = this;
    ctx.body = {
      code: 200,
      msg: 'success',
      result: config.userConfig || {},
    };
  }
}

module.exports = ConfigController;
