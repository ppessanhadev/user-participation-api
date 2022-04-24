import { DataSource } from 'typeorm'
import { User } from '@infrastructure/user/User'

export const connection = new DataSource({
  type: 'postgres',
  host: 'localhost',
  username: 'pgname',
  password: 'pgpassword',
  database: 'Participation',
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: ['src/infrastructure/migrations/*.ts'],
  migrationsRun: true,
  migrationsTableName: 'MigrationsVersion'
})
