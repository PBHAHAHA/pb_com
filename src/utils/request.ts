import axios , {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

export class Request {
  public static axiosInstance: AxiosInstance

  public static init() {
    this.axiosInstance = axios.create({
      baseURL: process.env.VUE_APP_BASE_URL + '/api',
      timeout: 6000
    })
    this.initInterceptors()
  }

  public static initInterceptors() {
    // 设置post请求头
    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    },error => {
      console.log(error);
    })

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        if (response.status === 200) {
          // return Promise.resolve(response.data);
          return response;
        } else {
          Request.errorHandle(response)
          return response
        }
      }
    )
  }

  private static errorHandle(res: any) {
    // 状态码判断
    switch(res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        console.log("请求资源不存在")
        break;
      default:
        console.log("连接错误")
    }
  }
  
}
