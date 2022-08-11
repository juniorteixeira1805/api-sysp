import { CreateUserService } from './../../services/userService/createUserService'
import { Request, Response } from 'express'
import { IUserResponse } from './../../entities/userEntity'
import { IUserController } from '../interfaces/user-controller-interface'

export class UserController implements IUserController {
  async createUser(
    req: Request,
    res: Response
  ): Promise<Response<IUserResponse>> {
    try {
      const userService = new CreateUserService()
      const user = req.body

      const response = await userService.createUser(user)

      return res.status(201).json(response)
    } catch (error: any) {
      return res.status(error.statusCode).json(error)
    }
  }
}
