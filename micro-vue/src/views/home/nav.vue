<template>
  <div class="m-home-nav">
    <div class="list">
      <div class="item" :class="{'active': $route.path === item.path || $route.path.startsWith(item.path)}" v-for="(item, idx) in navList" :key="idx">
        <router-link :title="item.title" :to="{path: item.path}">
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface INav {
  title: string;
  path: string;
}

@Component
export default class MHomeNav extends Vue {
  private navList: INav[] = [{
    path: '/dashboard/source',
    title: '源端管理'
  }, {
    path: '/dashboard/target',
    title: '目标端管理'
  }];
}
</script>

<style lang="scss">
.m-home-nav {
  border-right: 1px solid #e2e7f0;
  width: 200px;
  box-sizing: border-box;
  .list {
    padding-top: 10px;
    .item {
      user-select: none;
      width: 100%;
      font-size: 14px;
      cursor: pointer;
      position: relative;
      padding: 10px 0;
      a {
        position: relative;
        display: block;
        height: 100%;
        color: #666;
        padding-left: 20px;
        text-decoration: none;
      }
      &:before {
        position: absolute;
        content: '';
        height: 0;
        width: 3px;
        border-radius: 1px;
        background: #0075ff;
        top: 50%;
        transform: translateY(-50%);
        transition: height .3s;
        left: -1px;
      }
      &:hover,
      &.active {
        background: #f5f7fa;
        a {
          color: #0075ff;
        }
        &:before {
          height: 100%;
        }
      }
    }
  }
}
</style>
