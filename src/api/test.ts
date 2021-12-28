import request from '@/utils/request'

export function getHomeInfo() {
  return request({
    url: '/home/info',
    method: 'GET'
  })
}

export function getArticalList() {
  return request({
    url: '/article/list',
    method: 'get'
  })
}

export function addArtical(data:any) {
  return request({
    url: '/article/add',
    method: 'post',
    data
  })
}