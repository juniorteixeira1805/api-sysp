import mongoose, { Document, Schema } from 'mongoose'
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts'

import { IUserEntity } from '../entities/userEntity'

interface IUser
  extends Omit<IUserEntity, '_id' | 'createdAt' | 'updatedAt'>,
    Document {}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true
    },
    birthDate: {
      type: Date,
      required: true
    },
    maritalStatus: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      enum: ['MALE', 'FEMALE'],
      required: true
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
      required: false
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
)

userSchema.plugin(mongoosePagination)
const UserModel: Pagination<IUser> = mongoose.model<IUser, Pagination<IUser>>(
  'User',
  userSchema
)

export { UserModel }
