import { CreateUserService } from './../../services/userService/createUserService'
import { Request, Response } from 'express'
import { IUserResponse } from './../../entities/userEntity'
import {
  IDeleteUserResponse,
  IUserController
} from '../interfaces/user-controller-interface'
import { GetAllUsersService } from '../../services/userService/getAllUsersService'
import { GetOneUserService } from '../../services/userService/get-one-user-service'
import { DeleteUserService } from '../../services/userService/delete-user-service'

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

  async getAllUsers(
    req: Request,
    res: Response
  ): Promise<Response<IUserResponse[]>> {
    try {
      const userService = new GetAllUsersService()
      const { page, limit } = req.query

      const response = await userService.getAllUsers({ page, limit })

      return res.status(201).json(response)
    } catch (error: any) {
      return res.status(error.statusCode).json(error)
    }
  }

  async getOneUser(
    req: Request,
    res: Response
  ): Promise<Response<IUserResponse>> {
    try {
      const userService = new GetOneUserService()
      const { id } = req.params

      const response = await userService.getOneUser(id)

      return res.status(200).json(response)
    } catch (error: any) {
      return res.status(error.statusCode).json(error)
    }
  }

  async deleteUser(
    req: Request,
    res: Response
  ): Promise<Response<IDeleteUserResponse>> {
    try {
      const userService = new DeleteUserService()
      const { id } = req.params

      const response = await userService.deleteUser(id)

      return res.status(200).json(response)
    } catch (error: any) {
      return res.status(error.statusCode).json(error)
    }
  }
}
