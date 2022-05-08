import { container } from 'tsyringe'
import { PrismaClient } from '@prisma/client'

export class Container {
  static PrismaClient = Symbol('PrismaClient')

  public static resolveRegisters() {
    container.register<PrismaClient>(this.PrismaClient, {
      useValue: new PrismaClient(),
    })
  }
}
