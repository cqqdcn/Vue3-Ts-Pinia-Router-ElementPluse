export interface ILoginParams {
  username: string
  password: string | number
}

// 登录
export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>
}

// 用户基本信息
export interface UserInfoApi {
  username?: string
  password?: string
  nackname?: string
  email?: string
  phone?: string
  address?: string
  hobby?: string
  professional?: string
  motto?: string
}
