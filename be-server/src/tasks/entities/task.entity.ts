import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type : 'double precision'})
  lat: number;

  @Column({type : 'double precision'})
  lng: number;
}
