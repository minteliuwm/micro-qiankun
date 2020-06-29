import { Component, Vue } from 'vue-property-decorator';
import { request } from './utils/request';

@Component
export default class GlobalMixin extends Vue {
  $request(key: string, data: any): Promise<any> {
    return request(key, data);
  }
};
