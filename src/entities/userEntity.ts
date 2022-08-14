import { IAddress } from './addressEntity'

export interface IUserEntity {
  name: string
  lastName: string
  email: string
  password: string
  phone: string
  birthDate: Date
  maritalStatus: string
  gender: 'MALE' | 'FEMALE'
  address: IAddress
}

export interface CreatedUserModel extends Omit<IUserEntity, 'password'> {
  _id: string
}

export interface IUserResponse extends Omit<IUserEntity, 'password'> {
  id: string
}
