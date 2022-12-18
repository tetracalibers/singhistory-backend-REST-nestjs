import { SingHistory } from 'src/sing-history/entities/sing-history.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  readonly id: number;

  @OneToMany((type) => SingHistory, (history) => history.userId)
  singHistory?: SingHistory[];

  @Column()
  name: string;

  @Column()
  password: string;
}
