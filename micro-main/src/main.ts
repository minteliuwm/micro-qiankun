import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { registerMicroApps, setDefaultMountApp, start, initGlobalState, MicroAppStateActions } from 'qiankun';
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

initApp();

const global = (store.state as any).global;
Vue.prototype.$globalStateActions = initGlobalState(global);

async function init() {
  const userConfig = await request('getUserConfig');
  const apps = (userConfig.apps || []).map(app => ({
    name: app.name,
    entry: app.entry,
    render,
    // container: '#vue',
    activeRule: genActiveRule(app.routerPrefix),
    props: {}
  }));

  registerMicroApps(apps);

  setDefaultMountApp(userConfig.defaultApp);

  // 开启严格的样式隔离模式不能采用自定义 render 方式来渲染
  // const options: any = { sandbox: { strictStyleIsolation: true } };
  // start(options);
  start();
}

init();
