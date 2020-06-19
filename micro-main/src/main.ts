import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { fetch as fetchPolyfill } from 'whatwg-fetch';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import mixin from './mixin';

Vue.mixin(mixin);

Vue.config.productionTip = false;

let app: any = null;

function render({ appContent = '', loading = false } = {}) {
  if (app) {
    app.content = appContent;
    app.loading = loading;
  } else {
    app = new Vue({
      el: '#app',
      router,
      store,
      data () {
        return {
          content: appContent,
          loading
        };
      },
      render (h) {
        return h(App, {
          props: {
            content: (this as any).content,
            loading: (this as any).loading
          }
        });
      }
    });
  }
};

function genActiveRule(routerPrefix: string) {
  return (location: any) => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render({ appContent: '', loading: true });
}

const request = (url: string) => {
  return fetchPolyfill(url, {
    referrerPolicy: 'origin-when-cross-origin'
  });
};

initApp();

const msg = {
  data: {
    userInfo: 'liuwm',
    fns: [
      function getMicro () {
        return 'micro1';
      }
    ]
  }
};

registerMicroApps(
  [{
    name: 'vue app',
    entry: '//localhost:7002',
    render,
    activeRule: genActiveRule('/dashboard'),
    props: msg
  }, {
    name: 'react app',
    entry: '//localhost:7001',
    render,
    activeRule: genActiveRule('/react'),
    props: msg
  }]
);

setDefaultMountApp('/dashboard');

const opts: any = { fetch: request };

start(opts);
