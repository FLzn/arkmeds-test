import { Driver } from '../../domain/entities/Driver';
import { PeopleEntity } from '../entities/PeopleEntity';

export class DriverMapper {
    static toEntity(driver: Driver): PeopleEntity {
        const entity = new PeopleEntity();
        entity.name = driver.name;
        entity.cpf = driver.cpf;
        entity.age = driver.age;
        entity.sex = driver.sex;
        entity.role = driver.role;
        return entity;
    }
}
