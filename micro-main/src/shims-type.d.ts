import Vue from 'vue';
import { MicroAppStateActions } from 'qiankun';

declare module 'vue/types/vue' {
  interface Vue {
    $globalStateActions: MicroAppStateActions;
  }
}
