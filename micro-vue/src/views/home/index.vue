<template>
  <div class="m-home">
    <m-home-header v-if="headerVisible" />
    <div class="m-home-main">
      <m-home-nav />
      <m-home-content />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MHomeHeader from './header.vue';
import MHomeNav from './nav.vue';
import MHomeContent from './content.vue';

@Component({
  components: {
    MHomeHeader,
    MHomeNav,
    MHomeContent
  }
})
export default class MHome extends Vue {
  private headerVisible: boolean = !window.__POWERED_BY_QIANKUN__;
}
</script>

<style lang="scss">
.m-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  &-main {
    min-width: 1360px;
    min-height: 700px;
    display: flex;
    flex: 1;
    height: 0;
  }
}
</style>
