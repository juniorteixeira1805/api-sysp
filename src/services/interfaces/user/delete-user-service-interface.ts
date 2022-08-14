import { HttpResponse } from '../../errors/bad-request.error'

export interface DeleteUserResponse {
  message: string
  success: boolean
}

export interface IDeleteUserService {
  deleteUser: (id: string) => Promise<DeleteUserResponse | HttpResponse>
}
