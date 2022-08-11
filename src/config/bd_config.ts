import mongoose from 'mongoose'
import { BDCONNECTION } from './consts'

const mongoConnection = mongoose.connect(BDCONNECTION)
mongoose.Promise = global.Promise

export { mongoConnection }
