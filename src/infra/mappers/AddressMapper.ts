import { Address } from '../../domain/entities/Address';
import { AddressEntity } from '../entities/AddressEntity';

export class AddressMapper {
    static toEntity(address: Address): AddressEntity {
        const entity = new AddressEntity();
        entity.neighborhood = address.neighborhood;
        entity.number = address.number;
        entity.street = address.street;
        entity.zipCode = address.zipCode;
        entity.people = address.people;
        return entity;
    }
}
