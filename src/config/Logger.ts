import useDebug, { IDebugger } from 'debug'
import { yellow, red } from 'colors'
import { singleton } from 'tsyringe'

@singleton()
export class Logger {
  private readonly scope: string
  private readonly debug: IDebugger

  constructor() {
    this.scope = 'API'
    this.debug = useDebug(this.scope)
  }

  public info(...args: unknown[]) {
    const message = args.shift()
    this.debug(`${yellow('[INFO]')} ${message}`)
  }

  public error(...args: unknown[]) {
    const message = args.shift()
    this.debug(`${red('[ERROR]')} ${message}`)
  }
}