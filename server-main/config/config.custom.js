'use strict';

module.exports = {
  defaultApp: '/dashboard',
  apps: [{
    name: 'vue app',
    entry: '//localhost:7002',
    routerPrefix: '/dashboard',
  }, {
    name: 'react app',
    entry: '//localhost:7001',
    routerPrefix: '/react',
  }],
};
