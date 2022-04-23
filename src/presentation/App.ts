import { singleton } from 'tsyringe';
import express, { Express } from 'express'
import cors from 'cors'

@singleton()
export class Application {
  protected app: Express;

  protected port = process.env.PORT || 3333;

  constructor() {
    this.app = express();
  }

  protected setupMiddleware() {
    const middlewares = [express.json(), cors()];
    for (const middleware of middlewares) {
      this.app.use(middleware);
    }
  }

  protected setupRoutes() {
    this.app.get('/', (_req, res) => {
      return res.send('tudo tranquilo')
    })
  }

  public initialize() {
    this.setupMiddleware();
    this.setupRoutes();

    this.app.listen(this.port, () => console.log(`Application running in :${this.port}`))
  }
}