import { DataSource, Repository } from "typeorm";
import { IDriverRepository } from "../../domain/interfaces/IDriverRepository";
import { Driver } from "../../domain/entities/Driver";
import { PeopleEntity } from "../entities/PeopleEntity";
import { DriverMapper } from "../mappers/DriverMapper";
import { RoleEnum } from "../../domain/enums/RoleEnum";
import { AddressEntity } from "../entities/AddressEntity";
import { AddressMapper } from "../mappers/AddressMapper";

export class DriverRepository implements IDriverRepository {
  private driverRepository: Repository<PeopleEntity>;
  private addressRepository: Repository<AddressEntity>;

  constructor(dataSource: DataSource) {
    this.driverRepository = dataSource.getRepository(PeopleEntity);
    this.addressRepository = dataSource.getRepository(AddressEntity);
  }

  async createDriver(driver: Driver): Promise<void> {
    const newDriver = DriverMapper.toEntity(driver);
    const { address } = driver;

    const mappedAddress = AddressMapper.toEntity(address);

    const savedDriver = await this.driverRepository.save(newDriver);
    mappedAddress.people = savedDriver;

    await this.addressRepository.save(mappedAddress);
  }

  async findAll(): Promise<PeopleEntity[]> {
    const drivers = await this.driverRepository.find({
      where: {
        role: RoleEnum.DRIVER
      }
    });
    return drivers;
  }

  async findById(id: number): Promise<PeopleEntity | null> {
    const driver = await this.driverRepository.findOne({
      where: {
        id
      },
      relations: ['addresses']
    });

    return driver ? driver : null;
  }

  async findByCpf(cpf: string): Promise<PeopleEntity | null> {
    const existentDriver = await this.driverRepository.findOneBy({
      cpf,
      role: RoleEnum.DRIVER
    });

    return existentDriver ? existentDriver : null;
  }

  async updateDriver(existingDriver: PeopleEntity, updatedDriver: Driver): Promise<void> {
    existingDriver.name = updatedDriver.name;
    existingDriver.age = updatedDriver.age;
    existingDriver.cpf = updatedDriver.cpf;
    existingDriver.sex = updatedDriver.sex;

    if (updatedDriver.address) {
      const addressEntity = existingDriver.addresses[0] || new AddressEntity();
      addressEntity.street = updatedDriver.address.street;
      addressEntity.number = updatedDriver.address.number;
      addressEntity.neighborhood = updatedDriver.address.neighborhood;
      addressEntity.zipCode = updatedDriver.address.zipCode;
      addressEntity.people = existingDriver;

      existingDriver.addresses = [addressEntity];
  }

    await this.driverRepository.save(existingDriver);
  }

  async deleteDriver(driver: PeopleEntity): Promise<void> {
    await this.addressRepository.remove(driver.addresses)
    await this.driverRepository.remove(driver);
  }
}