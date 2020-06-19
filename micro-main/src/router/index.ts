import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [{
  path: '/',
  redirect: 'dashboard'
}, {
  path: '/dashboard*',
  name: 'demo1',
  component: () => import(/* webpackChunkName: "demo" */ '../views/demo1.vue')
},
{
  path: '/react*',
  name: 'demo2',
  component: () => import(/* webpackChunkName: "demo" */ '../views/demo2.vue')
}];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router;
