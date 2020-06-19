<template>
  <div class="m-home-content">
    <div class="page">
      <router-view class="page-content"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MHomeContent extends Vue {}
</script>

<style lang="scss">
.m-home-content {
  flex: 1;
  overflow-x: auto;
  background: #f6f9fb;
  .page {
    min-width: 1160px;
    height: 100%;
    padding: 16px 30px 24px 30px;
    box-sizing: border-box;
		overflow: auto;
		&-content {
			height: 100%;
		}
  }
}
</style>
