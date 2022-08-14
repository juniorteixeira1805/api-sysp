import { Router } from 'express'
import { UserController } from '../controllers/user/userController'

const userRouter = Router()

const userController = new UserController()

userRouter.post('/user/register', userController.createUser)
userRouter.get('/users', userController.getAllUsers)
userRouter.get('/user/:id', userController.getOneUser)
userRouter.delete('/user/:id', userController.deleteUser)

export { userRouter }
