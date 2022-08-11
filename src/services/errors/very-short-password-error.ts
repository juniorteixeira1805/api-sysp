import { ApplicationError } from './application-error'

export class VeryShortPasswordError extends ApplicationError {
  constructor() {
    super('Senha muito curta')
    this.name = 'VeryShortPasswordError'
  }
}
