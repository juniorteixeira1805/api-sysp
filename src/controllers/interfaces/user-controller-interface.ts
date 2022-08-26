import { IUserResponse } from '../../entities/userEntity'
import { Request, Response } from 'express'

export interface IDeleteUserResponse {
  message: string
  success: boolean
}

export interface IUserController {
  createUser: (req: Request, res: Response) => Promise<Response<IUserResponse>>
  getAllUsers: (
    req: Request,
    res: Response
  ) => Promise<Response<IUserResponse[]>>
  getOneUser: (req: Request, res: Response) => Promise<Response<IUserResponse>>
  updateUser: (req: Request, res: Response) => Promise<Response<IUserResponse>>
  deleteUser: (
    req: Request,
    res: Response
  ) => Promise<Response<IDeleteUserResponse>>
}
