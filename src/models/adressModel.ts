import mongoose, { Document, Schema } from 'mongoose'
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts'
import { IAddress } from '../entities/addressEntity'

interface Address extends IAddress, Document {}

const addressSchema = new Schema<Address>(
  {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
    }
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
)

addressSchema.plugin(mongoosePagination)
const AddressModel: Pagination<Address> = mongoose.model<
  Address,
  Pagination<Address>
>('Address', addressSchema)

export { AddressModel }
