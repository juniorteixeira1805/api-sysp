import { IUserResponse } from '../../entities/userEntity'
import { Request, Response } from 'express'

export interface IUserController {
  createUser: (req: Request, res: Response) => Promise<Response<IUserResponse>>
}
