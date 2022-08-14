import { HttpResponse } from '../../errors/bad-request.error'

export interface GetOneUserResponse {
  id: string
  name: string
  lastName: string
  email: string
  phone: string
  gender: string
  birthDate: Date
  maritalStatus: string
  address: any
}

export interface IGetOneUserService {
  getOneUser: (id: string) => Promise<GetOneUserResponse | HttpResponse>
}
