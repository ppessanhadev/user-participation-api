import { Request, Response } from 'express'
import { inject, singleton } from 'tsyringe'
import { ListUsersUseCase } from '@domain/user/cases/ListUsersUseCase'

@singleton()
export class ListUsersController {
  constructor(
    @inject(ListUsersUseCase)
    private listUsers: ListUsersUseCase,
  ) {}

  public async handleRequest(_req: Request, res: Response) {
    try {
      const response = await this.listUsers.execute()
      return res.status(200).json(response)
    } catch (e) {
      const error = e as Error
      return res.status(400).json({ error: error.message || error })
    }
  }
}
