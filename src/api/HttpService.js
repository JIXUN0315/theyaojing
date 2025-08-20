import axios from 'axios';

/**
 * 建立 Axios，並返回 HttpService 實例，用於處理 HTTP 請求。
 * @param {import('axios').CreateAxiosDefaults} axiosConfig - Axios 配置對象
 * @returns {HttpService} 返回 HttpService 實例
 */
export function createAxios(axiosConfig) {
  return new HttpService(axiosConfig);
}

/**
 * HttpService 類別，使用 Axios 處理 HTTP 請求。
 */
export default class HttpService {
  /**
   * The axios instance
   * @type {import('axios').AxiosInstance}
   */
  axios;

  constructor(axiosConfig) {
    this.axios = axios.create(axiosConfig);
  }

  /**
   * 定義一個請求
   * @param {import('axios').AxiosRequestConfig} axiosRequestConfig - Axios 請求配置
   * @returns {HttpRequest} 返回 Request 實例
   */
  defineRequest(axiosRequestConfig) {
    return new HttpRequest(this.axios, axiosRequestConfig);
  }

  /**
   * 定義一個 GET 請求
   * @param {string} uri - 請求的 URI
   * @param {import('axios').AxiosRequestConfig} axiosRequestConfig - Axios 請求配置
   * @returns {HttpRequest} 返回 Request 實例
   */
  defineGet(uri, axiosRequestConfig = {}) {
    return new HttpRequest(this.axios, {
      ...axiosRequestConfig,
      method: 'get',
      url: uri,
    });
  }

  /**
   * 定義一個 POST 請求
   * @param {string} uri - 請求的 URI
   * @param {import('axios').AxiosRequestConfig} axiosRequestConfig - Axios 請求配置
   * @returns
   */
  definePost(uri, axiosRequestConfig = {}) {
    return new HttpRequest(this.axios, {
      ...axiosRequestConfig,
      method: 'post',
      url: uri,
    });
  }
}

/**
 * HttpRequest 類別，用於發送 Axios 請求並支援中斷操作。
 */
export class HttpRequest {
  #controller = new AbortController();

  /**
   * axios
   * @type {import('axios').AxiosInstance}
   */
  #axios;

  /**
   * axiosConfig
   * @type {import('axios').AxiosRequestConfig}
   */
  config;

  #restfulPattern = '{.+?}';
  #isRestful = false;

  /**
   * @param {import('axios').AxiosInstance} axios - Axios 實例
   * @param {import('axios').AxiosRequestConfig} axiosRequestConfig - Axios 請求配置
   */
  constructor(axios, axiosRequestConfig) {
    this.#axios = axios;
    this.config = axiosRequestConfig;
    this.#isRestful = new RegExp(this.#restfulPattern).test(
      axiosRequestConfig.url,
    );
  }

  /**
   * 發送請求
   * @param {Object} urlParams
   * @param {Object} bodyData
   * @returns
   */
  send = (urlParams, bodyData) => {
    const { signal } = this.#controller;

    if (import.meta.env.DEV) {
      signal.onabort = (event) => {
        console.log(
          `${this.config.url} 已中止，中止原因：${event.target.reason}`,
        );
      };
    }

    let config = {
      signal: this.#controller.signal,
      ...this.config,
      params: urlParams,
      data: bodyData,
    };

    if (this.#isRestful) {
      config = this.#replaceDynamicPath(config);
    }

    return this.#axios.request(config);
  };

  /**
   * 中斷請求
   */
  abort = (reason = '手動中止。') => {
    this.#controller.abort(reason);
    this.#controller = new AbortController();
  };

  /**
   * 將 urlParams 中的參數轉移至 dynamic path。
   *
   * example: api/post/{id} --> api/post/1
   *
   * @param {import('axios').AxiosRequestConfig} requestConfig
   * @returns {import('axios').AxiosRequestConfig}
   */
  #replaceDynamicPath(requestConfig) {
    const regex = new RegExp(this.#restfulPattern, 'g');
    let { url, params } = requestConfig;

    let m;
    while ((m = regex.exec(requestConfig.url)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match) => {
        // trim '{' and '}'
        const key = match.replace(new RegExp('[{}]', 'g'), '');

        if (import.meta.env.DEV && params[key] == undefined) {
          console.warn(`value of '${key}' is undefined`);
        }

        url = url.replace(match, params[key]);
        delete params[key];
      });
    }

    requestConfig.url = url;
    requestConfig.params = params;

    return requestConfig;
  }
}