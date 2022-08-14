import { ApplicationError } from './application-error'

export class UpdateAddressError extends ApplicationError {
  constructor() {
    super('Erro ao atualizar endereço')
    this.name = 'UpdateAddressError'
  }
}
