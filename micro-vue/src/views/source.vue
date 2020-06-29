<template>
  <div class="m-source">
    <div>源端管理</div>
    <div>这是从接口请求过来的：{{desc}}</div>
    <div>这是从主应用传过来的：{{userName}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { MODULE_NAMESPACE } from '../utils/constant';

@Component
export default class MSource extends Vue {
  private desc: string = '';

  @State('userName', MODULE_NAMESPACE.global)
  private userName!: string;

  private created() {
    this.getAppDesc();
  }

  private async getAppDesc() {
    try {
      const userConfig = await this.$request('getUserConfig');
      this.desc = (userConfig && userConfig.appDesc) || '';
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
