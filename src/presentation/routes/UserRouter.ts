import { Router } from 'express'
import { singleton } from 'tsyringe'

@singleton()
export class UserRouter {
  private readonly router: Router
  private readonly path: string

  constructor() {
    this.router = Router()
    this.path = '/v1/user'
    this.setupRoutes()
  }

  get route() {
    return this.router
  }

  private setupRoutes() {
    this.router.get(this.path, (_, res) => res.send(['users-list']))
  }
}