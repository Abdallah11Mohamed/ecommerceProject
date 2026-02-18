
export interface IuserDataResponse {
  message: string
  user: IuserData
  token: string
}

export interface IuserData {
  name: string
  email: string
  role: string
}

