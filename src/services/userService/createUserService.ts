import { UserNotCreatedError } from './../errors/user-not-created-error'
import { UserAlreadyExistsError } from './../errors/user-already-exists-error'
import { IUserEntity, IUserResponse } from '../../entities/userEntity'
import { UserModel } from '../../models/userModel'
import bcrypt from 'bcrypt'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest, HttpResponse } from '../errors/bad-request.error'
import { VeryShortPasswordError } from '../errors/very-short-password-error'
import { AddressModel } from '../../models/adressModel'
import { GenderError } from '../errors/gender-error'
import { VeryShortPhoneError } from '../errors/very-short-phone-error'

const userCreateDto = ({
  _id,
  address,
  birthDate,
  email,
  gender,
  lastName,
  maritalStatus,
  name,
  password,
  phone
}: IUserEntity): IUserResponse => ({
  _id,
  address,
  birthDate,
  email,
  gender,
  lastName,
  maritalStatus,
  name,
  phone
})

export class CreateUserService {
  async createUser(userParams: any): Promise<IUserResponse | HttpResponse> {
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

    const userAlreadyExists = await UserModel.findOne({ email })
    if (userAlreadyExists) throw badRequest(new UserAlreadyExistsError(email))

    if (gender !== 'MALE' && gender !== 'FEMALE') {
      throw badRequest(new GenderError())
    }
    if (phone.trim().length < 11) {
      throw badRequest(new VeryShortPhoneError())
    }
    if (password.length < 8) {
      throw badRequest(new VeryShortPasswordError())
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const createdAddress = await AddressModel.create({ ...address })
    const params = {
      name: userParams.name,
      lastName: userParams.lastName,
      email,
      address: createdAddress._id,
      birthDate: userParams.birthDate,
      maritalStatus: userParams.maritalStatus,
      phone: userParams.phone,
      gender,
      password: hashedPassword
    }

    const userCreated = await UserModel.create({ ...params })
    if (!userCreated) throw badRequest(new UserNotCreatedError())

    return userCreateDto(userCreated)
  }
}
