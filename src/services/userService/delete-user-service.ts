import { UserModel } from '../../models/userModel'
import { badRequest, HttpResponse } from '../errors/bad-request.error'
import { MissingParamError } from '../errors/missing-param-error'
import {
  DeleteUserResponse,
  IDeleteUserService
} from '../interfaces/user/delete-user-service-interface'
import { UserNotDeletedError } from '../errors/user-not-deleted-error'

export class DeleteUserService implements IDeleteUserService {
  async deleteUser(id: string): Promise<DeleteUserResponse | HttpResponse> {
    if (!id) throw badRequest(new MissingParamError('id'))

    const user = await UserModel.findByIdAndDelete(id)

    if (!user) {
      throw badRequest(new UserNotDeletedError())
    }

    return {
      message: 'Usuário deletado com sucesso',
      success: true
    }
  }
}
