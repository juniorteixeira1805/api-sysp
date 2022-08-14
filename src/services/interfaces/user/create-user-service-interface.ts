import { IUserEntity } from '../../../entities/userEntity'
import { HttpResponse } from '../../errors/bad-request.error'

export interface CreateUserResponse extends Omit<IUserEntity, 'password'> {
  id: string
}

export interface ICreateUserService {
  createUser: (
    user: IUserEntity | any
  ) => Promise<CreateUserResponse | HttpResponse>
}
