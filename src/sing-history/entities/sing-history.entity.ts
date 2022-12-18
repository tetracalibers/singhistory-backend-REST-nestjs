import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SingHistory {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  readonly id: number;

  @Column()
  artistId: string;

  @Column()
  artistName: string;

  @Column()
  songName: string;

  @Column({ nullable: true })
  jacketUrl?: string;

  @Column()
  singDate: Date;

  @Column({ type: 'int', default: 0 })
  singKey: number;

  @Column({ type: 'int', default: 0, unsigned: true })
  rating: number;

  @Column({ type: 'float', unsigned: true, nullable: true })
  score?: number;

  @Column({ nullable: true })
  memo?: string;

  @CreateDateColumn()
  readonly createdAt: Date;

  @UpdateDateColumn()
  readonly updatedAt: Date;
}
