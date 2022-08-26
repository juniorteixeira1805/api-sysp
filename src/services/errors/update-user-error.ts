import { ApplicationError } from './application-error'

export class UpdateUserError extends ApplicationError {
  constructor() {
    super('Erro ao atualizar informações do usuário')
    this.name = 'UpdateUserError'
  }
}
