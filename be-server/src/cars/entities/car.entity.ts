import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({type : 'double precision'})
    lat: number;
  
    @Column({type : 'double precision'})
    lng: number;
}
