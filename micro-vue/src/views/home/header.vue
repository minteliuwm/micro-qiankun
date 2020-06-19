<template>
  <div class="m-home-header">
    <div class="left">
      <div class="logo"></div>
      <div class="title">网易数据运河</div>
    </div>
    <div class="right">
      <div class="user">{{userName}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { MODULE_NAMESPACE } from '../../utils/constant';

@Component
export default class MHomeHeader extends Vue {
  @State('userName', MODULE_NAMESPACE.global)
  private userName!: string;
}
</script>

<style lang="scss">
.m-home-header {
  min-width: 1360px;
  flex: 0 0 56px;
  height: 56px;
  background-color: #2f3240;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
	.logo {
		margin-left: 18px;
		width: 50px;
		height: 100%;
		background: url("../../assets/images/logo2.png") center center no-repeat;
		background-size: 75%;
	}
	.title {
		font-size: 26px;
		line-height: 56px;
		margin-left: 12px;
  }
  .user {
    line-height: 56px;
    margin-right: 16px;
  }
}
</style>
