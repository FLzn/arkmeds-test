import { Driver } from '../../domain/entities/Driver';
import { DriverEntity } from '../entities/DriverEntity';

export class DriverMapper {
    static toEntity(driver: Driver): DriverEntity {
        const entity = new DriverEntity();
        entity.name = driver.name;
        entity.cpf = driver.cpf;
        entity.age = driver.age;
        entity.sex = driver.sex;
        entity.address = driver.address;
        return entity;
    }
}
