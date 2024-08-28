import { PeopleEntity } from "../../infra/entities/PeopleEntity";

export class Address {
    constructor(
        public zipCode: string,
        public street: string,
        public neighborhood: string,
        public number: string,
        public people: PeopleEntity
    ) { }

    public static formatAddress(address: Address): Address {
        return {
            street: address.street.trim(),
            neighborhood: address.neighborhood.trim(),
            number: address.number.trim(),
            zipCode: address.zipCode.trim(),
            people: address.people
        };
    }
}