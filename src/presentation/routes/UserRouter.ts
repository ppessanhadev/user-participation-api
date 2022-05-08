import { ListUsersController } from '@presentation/controllers/user/ListUsersController'
import { Router } from 'express'
import { inject, singleton } from 'tsyringe'

@singleton()
export class UserRouter {
  private readonly router: Router
  private readonly path: string

  constructor(
    @inject(ListUsersController)
    private listUsersController: ListUsersController,
  ) {
    this.router = Router()
    this.path = '/v1/user'
    this.setupRoutes()
  }

  get route() {
    return this.router
  }

  private setupRoutes() {
    this.router.get(this.path, (req, res) => {
      this.listUsersController.handleRequest(req, res)
    })
  }
}
