import { ApplicationError } from './application-error'

export class UserNotCreatedError extends ApplicationError {
  constructor() {
    super('Erro ao criar usuário')
    this.name = 'UserNotCreatedError'
  }
}
