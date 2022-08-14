import { IUserEntity } from '../../../entities/userEntity'
import { HttpResponse } from '../../errors/bad-request.error'

export interface UpdateUserResponse extends Omit<IUserEntity, 'password'> {
  id: string
}

export interface IUpdateUserService {
  updateUser: (
    id: string,
    userParams: IUserEntity | any
  ) => Promise<UpdateUserResponse | HttpResponse>
}
