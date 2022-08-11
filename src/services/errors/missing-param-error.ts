import { ApplicationError } from './application-error'

export class MissingParamError extends ApplicationError {
  constructor(param: string) {
    super(`O parâmetro ${param} é obrigatório`)
    this.name = 'MissingParamError'
  }
}
