import { Request, Response } from 'express'
import { singleton } from 'tsyringe'
import { connection } from '@infrastructure/data-source'
import { User } from '@infrastructure/user/User'

@singleton()
export class ListUserController {
  public async handleRequest(_: Request, res: Response) {
    try {
      const db = await connection.initialize()
      const response = await db.manager.find(User)
      return res.status(200).json(response)
    } catch (e) {
      const error = e as Error
      return res.status(400).json({ error })
    }
  }
}