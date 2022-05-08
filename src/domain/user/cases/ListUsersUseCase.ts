import { inject, singleton } from 'tsyringe'
import { PrismaClient } from '@prisma/client'
import { Container } from '@config/Container'

@singleton()
export class ListUsersUseCase {
  constructor(
    @inject(Container.PrismaClient)
    private database: PrismaClient,
  ) {}

  public async execute() {
    const users = this.database.user.findMany()
    return users
  }
}
