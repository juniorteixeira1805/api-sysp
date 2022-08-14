import { userDto } from './../helpers/user-dto'
import { UserModel } from '../../models/userModel'
import { badRequest, HttpResponse } from '../errors/bad-request.error'
import { UserNotFoundError } from '../errors/user-not-found-error'
import {
  GetOneUserResponse,
  IGetOneUserService
} from '../interfaces/user/get-one-user-service-interface'
import { MissingParamError } from '../errors/missing-param-error'

export class GetOneUserService implements IGetOneUserService {
  async getOneUser(id: string): Promise<GetOneUserResponse | HttpResponse> {
    if (!id) throw badRequest(new MissingParamError('id'))

    const user = await UserModel.findById(id).populate('address')

    if (!user) {
      throw badRequest(new UserNotFoundError())
    }

    return userDto(user)
  }
}
