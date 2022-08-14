import { ApplicationError } from './application-error'

export class VeryShortSizeError extends ApplicationError {
  constructor(message: string) {
    super(message)
    this.name = 'VeryShortSizeError'
  }
}
