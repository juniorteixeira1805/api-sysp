import { IAddress } from './addressEntity'

export interface IUserEntity {
  _id: string
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

export interface IUserResponse extends Omit<IUserEntity, 'password'> {}
