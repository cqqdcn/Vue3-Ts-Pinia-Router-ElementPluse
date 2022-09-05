//userInfo.ts
import http from '@/service/http'

export const userInfoApi = {
  userInfo(username:any) {
    return http.get('api/userInfo',username)
  },
}

export const echartApi = {
  getecharts() {
    return http.get('echarts/chart')
  },
}

