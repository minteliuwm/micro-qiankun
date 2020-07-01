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
    <div class="link" @click="switchUser">
      切换用户
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

@Component
export default class UNavBar extends Vue {
  @Mutation('SET_USERINFO', { namespace: 'global' })
  private setUserInfo!: any;

  private goto(title: string, href: string) {
    window.history.pushState({}, title, href);
  }

  private switchUser() {
    const userInfo = {
      userId: 'zhangsan',
      userName: '张三'
    };
    this.setUserInfo(userInfo);
    this.$globalStateActions.setGlobalState({ userInfo });
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
  .link {
    color: #fff;
    cursor: pointer;
    &:hover {
      color: #3274e6;
    }
  }
}
</style>
