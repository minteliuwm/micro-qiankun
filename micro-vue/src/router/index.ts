import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home/index.vue';
import Source from '../views/source.vue';
import Target from '../views/target.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [{
  path: '',
  redirect: '/dashboard'
}, {
  path: '/dashboard',
  component: Home,
  children: [{
    path: '',
    redirect: 'source'
  }, {
    path: 'source',
    name: 'Source',
    component: Source
  }, {
    path: 'target',
    name: 'Target',
    component: Target
  }]
}];

export default routes;
