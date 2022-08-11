import { IUserEntity, IUserResponse } from '../../entities/userEntity'
import { UserModel } from '../../models/userModel'
import bcrypt from 'bcrypt'

const userCreateDto = ({ _id, address, birthDate, email, gender, lastName, maritalStatus, name, password, phone }: IUserEntity): IUserResponse => ({
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
  async createUser (
    { address, birthDate, email, gender, lastName, maritalStatus, name, password, phone }: IUserEntity
  ): Promise<IUserResponse> {
    const userAlreadyExists = await UserModel.findOne({ email })

    if (userAlreadyExists) {
      throw new Error('criar arquivo de erro')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const params = {
      name,
      lastName,
      email,
      address,
      birthDate,
      maritalStatus,
      phone,
      gender,
      password: hashedPassword
    }

    const userCreated = await UserModel.create(params)

    if (!userCreated) {
      throw new Error('foda-se')
    }

    return userCreateDto(userCreated)
  }
}
