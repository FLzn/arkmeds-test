import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AddressEntity } from "./AdressEntity";

@Entity('drivers')
export class DriverEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  age: number;

  @Column()
  sex: string;

  @Column(type => AddressEntity)
  address: AddressEntity;
}