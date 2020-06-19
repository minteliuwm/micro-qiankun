<template>
  <div class="u-nav-bar">
    <div class="menu">
      <img class="logo" src="@/assets/logo.png">
    </div>
    <div class="menu" @click="goto('vue app', '/dashboard')">
      菜单1
    </div>
    <div class="menu" @click="goto('react app', '/react')">
      菜单2
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UNavBar extends Vue {
  private goto(title: string, href: string) {
    window.history.pushState({}, title, href);
  }
}
</script>

<style lang="scss" scoped>
.u-nav-bar{
  height: 64px;
  line-height: 64px;
  background: #394959;
  .logo{
    width:40px;
    height:auto;
  }
  .menu{
    float: left;
    line-height: 44px;
    height: 44px;
    margin: 8px 22px;
    color:#fff;
    cursor: pointer;
  }
}
</style>
