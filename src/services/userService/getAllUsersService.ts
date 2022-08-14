import { userToPaginationDto } from './../helpers/user-dto'
import {
  GetAllUsersParams,
  GetAllUsersResponse
} from './../interfaces/user/get-all-users-service-interface'
import { IGetAllUsersService } from '../interfaces/user/get-all-users-service-interface'
import { UserModel } from '../../models/userModel'
import { badRequest, HttpResponse } from '../errors/bad-request.error'
import { UserNotFoundError } from '../errors/user-not-found-error'

export class GetAllUsersService implements IGetAllUsersService {
  async getAllUsers(
    params: GetAllUsersParams
  ): Promise<GetAllUsersResponse | HttpResponse> {
    const { page, limit } = params

    const users = await UserModel.paginate({
      page: page ?? 1,
      limit: limit ?? 10
    })

    if (!users) {
      return badRequest(new UserNotFoundError())
    }
    const { docs, ...restUsersProps } = users

    const response = {
      users: docs,
      pagination: { ...restUsersProps }
    }

    return userToPaginationDto(response)
  }
}
