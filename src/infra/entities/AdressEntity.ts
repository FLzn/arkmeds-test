import { Column, Entity } from "typeorm";

@Entity('addresses')
export class AddressEntity {
    @Column()
    zipCode: string;

    @Column()
    street: string;

    @Column()
    neighborhood: string;

    @Column()
    number: string;
}