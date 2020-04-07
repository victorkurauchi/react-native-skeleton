import axios, { AxiosInstance, AxiosResponse, AxiosInterceptorManager } from 'axios';

export interface HttpClientConfigInterface {
  baseUrl: string;
  headers?: any;
}

export default abstract class HttpBaseClient {
  private instance: AxiosInstance;
  protected get: Function;
  protected post: Function;
  protected delete: Function;
  protected put: Function;

  constructor(config: HttpClientConfigInterface) {
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: config.headers || {
        'Content-type': 'application/json',
      }
    });

    this.get = this.instance.get.bind(this.instance);
    this.post = this.instance.post.bind(this.instance);
    this.put = this.instance.put.bind(this.instance);
    this.delete = this.instance.delete.bind(this.instance);
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }

  protected getResponseInterceptor() {
    return this.instance.interceptors.response;
  }
}
