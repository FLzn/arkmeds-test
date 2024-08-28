import { Driver } from '../../domain/entities/Driver';
import { IDriverRepository } from '../../domain/interfaces/IDriverRepository';
import { PeopleEntity } from '../entities/PeopleEntity';

export class InMemoryDriverRepository implements IDriverRepository {
  private drivers: Driver[] = [];

  async createDriver(driver: Driver): Promise<void> {
    this.drivers.push(driver);
  }

  async findAll(): Promise<any> {
    return this.drivers;
  }

  async findById(id: number): Promise<any> {
    return this.drivers.find(driver => driver.id === id);
  }

  async findByCpf(cpf: string): Promise<any> {
    const driver = this.drivers.find((el) => el.cpf === cpf);
    return driver || null;
  }

  async updateDriver(existentInformation: PeopleEntity, newDriver: Driver): Promise<void> {
  //   const existentDriver = this.drivers.find(driver => driver.id === newDriver.id);

  //   if (existentDriver) {
  //     existentDriver.name = driver.name;
  //     existentDriver.age = driver.age;
  //     existentDriver.cpf = driver.cpf;
  //     existentDriver.sex = driver.sex;
  //     existentDriver.address = driver.address;
  //   }
  }

  async deleteDriver(existentDriver: Driver): Promise<any> {
    const driver = this.drivers.filter(driver => driver.id === existentDriver.id);
    return driver;
  }
}
