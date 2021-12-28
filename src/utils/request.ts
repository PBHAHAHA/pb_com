import Axios , {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import { useMessage } from 'naive-ui'
import qs from 'qs'

/**
 * get status code
 * @param {AxiosResponse} response Axios  response object
 */
 const getErrorCode2text = (response: AxiosResponse): string => {
  /** http status code */
  const code = response.status
  /** notice text */
  let message = 'Request Error'
  switch (code) {
    case 400:
      message = 'Request Error'
      break
    case 401:
      message = 'Unauthorized, please login'
      break
    case 403:
      message = '拒绝访问'
      break
    case 404:
      message = '访问资源不存在'
      break
    case 408:
      message = '请求超时'
      break
    case 500:
      message = '位置错误'
      break
    case 501:
      message = '承载服务未实现'
      break
    case 502:
      message = '网关错误'
      break
    case 503:
      message = '服务暂不可用'
      break
    case 504:
      message = '网关超时'
      break
    case 505:
      message = '暂不支持的 HTTP 版本'
      break
    default:
      message = ''
  }
  return message
}
function getCookie(name: String){
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}

const service = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL + '/api',
  timeout: 10000,
})
const message = useMessage()

service.interceptors.request.use(async (config: AxiosRequestConfig) => {
  
  return config
})

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    console.log(response)
    if(response.status === 200){
      return Promise.resolve(response.data)
    }else{
      // const __text = getErrorCode2text(response)
      return Promise.reject(new Error(JSON.stringify(response.statusText) ))
    }
  },
  (error: AxiosError) => {
    console.log(error)
    let _msg: string = error.message
    if(error.message) {
      _msg = error.message
    }
    if(error.response){
      _msg = error.message
    }
    if(error.response?.status === 401){
      message.error("登录过期，请重新登录")
      return Promise.reject(new Error('401'))
    }
  }
)


export default service