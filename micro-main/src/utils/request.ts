import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import API from '../api';
import store from '../store';

import { cloneDeep } from 'lodash';

interface IHttpResponse {
  code: number;
  msg: string;
  result?: any;
}

const { protocol, hostname, port } = window.location;
const ORIGIN = port ? `${protocol}//${hostname}:${port}/` : `${protocol}//${hostname}/`;

// url前缀
const PRE_URL = 'v1/';

const DEFAULT_CONFIG = {
  baseURL: '',
  timeout: 10 * 60 * 1000,
  headers: {
    'Cache-Control': 'no-cache'
  }
};

const DEFAULT_OPTIONS: AxiosRequestConfig = {
  method: 'get',
  url: ''
};

const ajax = (args: any = {}) => {
  const options: AxiosRequestConfig = Object.assign({}, DEFAULT_OPTIONS, args);
  const state = store.state as any;
  if ((!options.method || options.method.toLowerCase() === 'get' || options.method.toLowerCase() === 'delete') && options.data) {
    if (!args.isFile && process.env.NODE_ENV === 'development') {
      options.url = options.url + '?' + qs.stringify(options.data);
      delete options.data;
    }
  }
  if (options.method && !args.isFile && (options.method.toLowerCase() === 'post' || options.method.toLowerCase() === 'put') && process.env.NODE_ENV === 'development') {
    options.url = options.url + '?' + 'isDevelop=true';
  }
  const origin = (state.global.userConfig && state.global.userConfig.server) || ORIGIN;
  const axiosConfig = cloneDeep(DEFAULT_CONFIG);
  axiosConfig.baseURL = origin + PRE_URL;
  if (options.headers) {
    axiosConfig.headers = options.headers;
  }

  return new Promise((resolve, reject) => {
    const instance = axios.create(axiosConfig);

    // request 拦截器
    instance.interceptors.request.use(config => {
      return config;
    }, e => {
      return Promise.reject(e);
    });

    // response 拦截器
    instance.interceptors.response.use(response => {
      // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
      const data = response.data === undefined ? response.request.responseText : response.data;
      const code = data.code;
      if (!code || (code && !code.toString().startsWith('2'))) {
        throw new Error(data.msg);
      }
      return data;
    }, e => {
      return Promise.reject(e);
    });

    // 请求处理
    instance(options).then(res => resolve(res)).catch(e => reject(e));
  });
};

// 处理返回结果
const handleResponse = (res: IHttpResponse): any => {
  return res.result;
};

export const request = async (key: string, data?: any): Promise<any> => {
  const res = await ajax(API[key](data)) as IHttpResponse;
  return handleResponse(res);
};
