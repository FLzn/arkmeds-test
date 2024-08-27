import { DataSource, Repository } from "typeorm";
import { IDriverRepository } from "../../domain/interfaces/IDriverRepository";
import { Driver } from "../../domain/entities/Driver";
import { DriverEntity } from "../entities/DriverEntity";
import { DriverMapper } from "../mappers/DriverMapper";

export class DriverRepository implements IDriverRepository {
  private driverRepository: Repository<DriverEntity>;

  constructor(dataSource: DataSource) {
    this.driverRepository = dataSource.getRepository(DriverEntity);
  }

  async createDriver(driver: Driver): Promise<void> {
    const newDriver = DriverMapper.toEntity(driver);
    await this.driverRepository.save(newDriver);
  }

  async findAll(): Promise<DriverEntity[]> {
    const drivers = await this.driverRepository.find();
    return drivers;
  }

  async findByCpf(cpf: string): Promise<DriverEntity | null> {
    const existentDriver = await this.driverRepository.findOneBy({
      cpf
    });

    return existentDriver ? existentDriver : null;
  }
}