import { Request, Response } from 'express'
import { singleton } from 'tsyringe'

@singleton()
export class ListUserController {
  public handleRequest(_: Request, res: Response) {
    try {
      return res.status(200).json(['users-list'])
    } catch (e) {
      const error = e as Error
      return res.status(400).json({ error })
    }
  }
}