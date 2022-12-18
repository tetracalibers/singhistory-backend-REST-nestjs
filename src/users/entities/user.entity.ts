import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  readonly id: number;

  @Column()
  name: string;

  @Column()
  password: string;
}
