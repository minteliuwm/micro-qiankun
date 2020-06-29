import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { fetch as fetchPolyfill } from 'whatwg-fetch';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import mixin from './mixin';
import { request } from './utils/request';

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

function customRequest(url: string) {
  return fetchPolyfill(url, {
    referrerPolicy: 'origin-when-cross-origin'
  });
};

initApp();

const global = (store.state as any).global;

const msg = {
  data: {
    ...global
  }
};

async function init() {
  const userConfig = await request('getUserConfig');
  const apps = (userConfig.apps || []).map(app => ({
    name: app.name,
    entry: app.entry,
    render,
    activeRule: genActiveRule(app.routerPrefix),
    props: msg
  }));

  registerMicroApps(apps);

  setDefaultMountApp(userConfig.defaultApp);

  const opts: any = { fetch: customRequest };

  start(opts);
}

init();
