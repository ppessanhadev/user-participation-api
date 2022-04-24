import { DataSource,  } from 'typeorm'
import { User } from './user/User'

export const connection = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pgname',
  password: 'pgpassword',
  database: 'typeorm',
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: ['src/infrastructure/migrations/*.ts'],
  migrationsTableName: 'MigrationsVersion'
})
