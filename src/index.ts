import 'reflect-metadata'
import { Application } from '@presentation/App'
import { container } from 'tsyringe'
import { Container } from '@config/Container'

Container.resolveRegisters()

const application = container.resolve(Application)

application.initialize()
