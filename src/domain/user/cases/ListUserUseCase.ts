import { singleton } from 'tsyringe'

@singleton()
export class ListUserUseCase {
  public execute() {
    return 'ok'
  }
}