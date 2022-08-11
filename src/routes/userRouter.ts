import { Router } from 'express'
import { UserController } from '../controllers/user/userController'

const userRouter = Router()

const userController = new UserController()

userRouter.post('/user/register', userController.createUser)

export { userRouter }
