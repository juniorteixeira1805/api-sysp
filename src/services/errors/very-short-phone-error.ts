import { ApplicationError } from './application-error'

export class VeryShortPhoneError extends ApplicationError {
  constructor() {
    super('Telefone inválido')
    this.name = 'VeryShortPhoneError'
  }
}
