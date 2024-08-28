import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AddressEntity } from "./AddressEntity";
import { RoleEnum } from "../../domain/enums/RoleEnum";
// import { AddressOwnerEntity } from "./AddressOwnerEntity";

@Entity('people')
export class PeopleEntity {
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

  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.PASSENGER,
  })
  role: RoleEnum;

  @OneToMany(() => AddressEntity, (address) => address.people, { cascade: true })
  addresses: AddressEntity[];
}