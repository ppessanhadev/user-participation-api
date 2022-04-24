import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  public id: string

  @Column()
  public firstName: string

  @Column()
  public lastName: string

  @Column()
  public participation: number
}