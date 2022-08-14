import { ApplicationError } from './application-error'

export class UserNotDeletedError extends ApplicationError {
  constructor() {
    super('Erro ao deletar usuário')
    this.name = 'UserNotDeletedError'
  }
}
