import './public-path';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router';
import store from './store';
import mixin from './mixin';

Vue.config.productionTip = false;

Vue.mixin(mixin);

let router: any = null;
let instance: any = null;

function render(props: any = {}) {
  const { container } = props;
  router = new VueRouter({
    // base: process.env.BASE_URL,
    mode: 'history',
    routes
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function storeTest(props: any) {
  props.onGlobalStateChange && props.onGlobalStateChange((value, prev) => {
    console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev);
    store.commit('global/SET_USERINFO', value.userInfo);
  }, true);
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props: any) {
  console.log('[vue] props from main framework', props);
  storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
