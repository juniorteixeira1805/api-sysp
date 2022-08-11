import mongoose from 'mongoose'
import { env } from './constants'

const mongoConnection = mongoose.connect(env.DB_CONNECTION)
mongoose.Promise = global.Promise

export { mongoConnection }
