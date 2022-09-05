//userInfo.ts
import http from '@/service/http'
import * as T from './types'

export const userHooksTableApi = {
  // 用户列表
  hookstable(params:T.Ihookstable) {
    return http.get('table/hookstable',params)
  },
  // 添加用户
  addhookstable(params:T.addhookstable) {
    return http.post('table/addhookstable',params)
  },
  // 删除用户
  removehookstable(params:any) {
    return http.get('table/removehookstable',params)
  },
  // 更新用户
  updatehookstable(params:T.addhookstable) {
    return http.post('table/updatehookstable',params)
  },
  // 批量删除用户
  removehookstableMore(params:any) {
    return http.get('table/removehookstableMore',params)
  },
  // 模糊查询
  searchookstable(params:any) {
    return http.get('table/searchookstable',params)
  },
}

