import { inject, singleton, container } from 'tsyringe'
import express, { Express } from 'express'
import cors from 'cors'
import { Logger } from '@config/Logger'
import * as routers from '@presentation/routes'

@singleton()
export class Application {
  private app: Express
  private port = process.env.PORT || 3333

  constructor(
    @inject(Logger)
    private logger: Logger,
  ) {
    this.app = express()
  }

  private setupMiddleware() {
    const middlewares = [express.json(), cors()]
    for (const middleware of middlewares) {
      this.app.use(middleware)
    }
  }

  private setupRoutes() {
    const routes = Object.values(routers)
    for (const route of routes) {
      const instance = container.resolve(route)
      this.app.use(instance.route)
    }
  }

  public initialize() {
    this.setupMiddleware()
    this.setupRoutes()

    this.app.listen(this.port, () => {
      this.logger.info(`Application running in: ${this.port}`)
    })
  }
}
