import { GetAllUsersResponse } from '../interfaces/user/get-all-users-service-interface'
import { CreatedUserModel, IUserResponse } from './../../entities/userEntity'

export const userDto = (userCreated: CreatedUserModel): IUserResponse => ({
  id: userCreated._id,
  address: userCreated.address,
  birthDate: userCreated.birthDate,
  email: userCreated.email,
  gender: userCreated.gender,
  lastName: userCreated.lastName,
  maritalStatus: userCreated.maritalStatus,
  name: userCreated.name,
  phone: userCreated.phone
})

export const userToPaginationDto = (param: any): GetAllUsersResponse => ({
  users: param.users.map((user: any) => {
    return {
      id: user._id,
      email: user.email,
      name: user.name,
      username: user.gender,
      lastName: user.lastName,
      phone: user.phone,
      birthDate: user.birthDate,
      maritalStatus: user.maritalStatus,
      address: user.address,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }),
  pagination: param.pagination
})
