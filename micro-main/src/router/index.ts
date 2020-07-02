import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [{
  path: '/',
  redirect: 'subpage'
}, {
  path: '/subpage',
  name: 'subpage',
  component: () => import(/* webpackChunkName: "demo" */ '../views/subpage.vue')
}];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});

export default router;
