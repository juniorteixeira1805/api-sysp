import { ParsedQs } from 'qs'
import { HttpResponse } from '../../errors/bad-request.error'

export interface GetAllUsersParams {
  page: string | ParsedQs | string[] | ParsedQs[] | undefined
  limit: string | ParsedQs | string[] | ParsedQs[] | undefined
}

interface UserServiceResponse {
  id: string
  name: string
  lastName: string
  email: string
  phone: string
  gender: string
  birthDate: Date
  maritalStatus: string
  address: any
  createdAt: Date
}

export interface GetAllUsersResponse {
  users: UserServiceResponse[]
  pagination: any
}

export interface IGetAllUsersService {
  getAllUsers: (
    params: GetAllUsersParams
  ) => Promise<GetAllUsersResponse | HttpResponse>
}
