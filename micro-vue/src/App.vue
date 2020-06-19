<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MApp extends Vue {}
</script>

<style lang="scss">
@import './scss/index.scss';
#app {
  width: 100%;
  height: 100%;
}
</style>
