import { VeryShortSizeError } from './../errors/very-short-size-error'
import { UserAlreadyExistsError } from './../errors/user-already-exists-error'
import { UserModel } from '../../models/userModel'
import bcrypt from 'bcrypt'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest, HttpResponse } from '../errors/bad-request.error'
import { AddressModel } from '../../models/adressModel'
import { GenderError } from '../errors/gender-error'
import { userDto } from '../helpers/user-dto'
import {
  IUpdateUserService,
  UpdateUserResponse
} from '../interfaces/user/update-user-service-interface'
import { UserNotFoundError } from '../errors/user-not-found-error'
import { UpdateAddressError } from '../errors/update-address-error'
import { UpdateUserError } from '../errors/update-user-error'

export class UpdateUserService implements IUpdateUserService {
  async updateUser(
    id: string,
    userParams: any
  ): Promise<HttpResponse | UpdateUserResponse> {
    if (!id) throw badRequest(new MissingParamError('id'))
    const requiredParams = [
      'name',
      'lastName',
      'phone',
      'birthDate',
      'maritalStatus',
      'gender',
      'email',
      'password',
      'address'
    ]
    const requiredParamsAddress = ['street', 'city', 'state', 'zipCode']

    for (const param of requiredParams) {
      if (!userParams[param]) {
        throw badRequest(new MissingParamError(param))
      }
    }
    for (const param of requiredParamsAddress) {
      if (!userParams.address[param]) {
        throw badRequest(new MissingParamError(param))
      }
    }
    const { email, password, address, gender, phone } = userParams

    const userAlreadyExists = await UserModel.findById(id)
    if (!userAlreadyExists) throw badRequest(new UserNotFoundError())

    if (userAlreadyExists.email !== email) {
      const emailAlreadyExists = await UserModel.findOne({ email })
      if (emailAlreadyExists)
        throw badRequest(new UserAlreadyExistsError(email))
    }

    if (gender !== 'MALE' && gender !== 'FEMALE') {
      throw badRequest(new GenderError())
    }
    if (phone.trim().length < 11) {
      throw badRequest(new VeryShortSizeError('Informe um telefone válido'))
    }
    if (password.length < 8) {
      throw badRequest(new VeryShortSizeError('Senha muito curta'))
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const updatedAddress = await AddressModel.findByIdAndUpdate(
      userAlreadyExists.address,
      { ...address },
      { new: true }
    )
    if (!updatedAddress) throw badRequest(new UpdateAddressError())

    const params = {
      name: userParams.name,
      lastName: userParams.lastName,
      email,
      address: updatedAddress._id,
      birthDate: userParams.birthDate,
      maritalStatus: userParams.maritalStatus,
      phone: userParams.phone,
      gender,
      password: hashedPassword
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { ...params },
      { new: true }
    ).populate('address')

    if (!updatedUser) throw badRequest(new UpdateUserError())

    return userDto(updatedUser)
  }
}
