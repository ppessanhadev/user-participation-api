import { ListUserController } from '@presentation/controllers/user/ListUserController'
import { Router } from 'express'
import { inject, singleton } from 'tsyringe'

@singleton()
export class UserRouter {
  private readonly router: Router
  private readonly path: string

  constructor(
    @inject(ListUserController)
    private listUserController: ListUserController
  ) {
    this.router = Router()
    this.path = '/v1/user'
    this.setupRoutes()
  }

  get route() {
    return this.router
  }

  private setupRoutes() {
    this.router.get(this.path, this.listUserController.handleRequest)
  }
}