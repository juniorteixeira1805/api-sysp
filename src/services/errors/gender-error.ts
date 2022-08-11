import { ApplicationError } from './application-error'

export class GenderError extends ApplicationError {
  constructor() {
    super('Gênero inválido. (Válidos: MALE ou FEMALE)')
    this.name = 'GenderError'
  }
}
