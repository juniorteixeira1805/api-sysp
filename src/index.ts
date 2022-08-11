import express from 'express'
import cors from 'cors'
import { env } from './config/constants'
import { router } from './routes'

const app = express()

const options = {
  origin:
    env.NODE_ENV === 'development'
      ? env.FRONTEND_DEVELOPMENT_URL
      : env.FRONTEND_PRODUCTION_URL
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(options))

app.use('/', router)

export { app }
