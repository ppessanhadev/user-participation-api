import { inject, singleton } from 'tsyringe'
import express, { Express } from 'express'
import cors from 'cors'
import { Logger } from '@config/Logger'

@singleton()
export class Application {
  protected app: Express
  protected port = process.env.PORT || 3333

  constructor(
    @inject(Logger)
    private logger: Logger
  ) {
    this.app = express()
  }

  protected setupMiddleware() {
    const middlewares = [express.json(), cors()]
    for (const middleware of middlewares) {
      this.app.use(middleware)
    }
  }

  protected setupRoutes() {
    this.app.get('/', (_req, res) => res.send('tudo tranquilo'))
  }

  public initialize() {
    this.setupMiddleware()
    this.setupRoutes()

    this.app.listen(this.port, () => {
      this.logger.info(`Application running in: ${this.port}`)
    })
  }
}