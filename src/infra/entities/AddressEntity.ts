import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PeopleEntity } from "./PeopleEntity";

@Entity('addresses')
export class AddressEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    zipCode: string;

    @Column()
    street: string;

    @Column()
    neighborhood: string;

    @Column()
    number: string;

    @ManyToOne(() => PeopleEntity, (people) => people.addresses)
    people: PeopleEntity;
}