<template>
  <div id="container">
    <u-nav-bar />
    <!-- 主应用的路由 -->
    <!-- <router-view /> -->
    <!-- 子应用内容区 -->
    <div id="vue" class="appContainer" v-html="content"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import UNavBar from './components/nav-bar.vue';

@Component({
  components: {
    UNavBar
  }
})
export default class MApp extends Vue {
  @Prop({
    default: ''
  })
  private content!: string;
}
</script>

<style lang="scss">
@import './scss/index.scss';
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .appContainer {
    flex: 1;
    height: 0;
    > div {
      width: 100%;
      height: 100%;
    }
  }
  // .m-home {
  //   background: #383838;
  // }
}
</style>
