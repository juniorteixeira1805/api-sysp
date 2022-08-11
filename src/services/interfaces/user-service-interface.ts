import { IUserEntity, IUserResponse } from '../../entities/userEntity'

export interface IUserService {
  createUser: (user: IUserEntity) => Promise<IUserResponse>
}
