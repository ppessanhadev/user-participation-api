import { ListUserUseCase } from '@domain/user/cases/ListUserUseCase'
import { Request, Response } from 'express'
import { inject, singleton } from 'tsyringe'

@singleton()
export class ListUsersController {
  constructor(
    @inject(ListUserUseCase)
    private listUsersUseCase: ListUserUseCase,
  ) {}

  public async handleRequest(_: Request, res: Response) {
    try {
      const response = await this.listUsersUseCase.execute()
      return res.status(200).json(response)
    } catch (e) {
      const error = e as Error
      return res.status(400).json({ error })
    }
  }
}
