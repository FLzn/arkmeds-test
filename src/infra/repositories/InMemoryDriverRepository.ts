import { Driver } from '../../domain/entities/Driver';
import { IDriverRepository } from '../../domain/interfaces/IDriverRepository';
import { DriverEntity } from '../entities/DriverEntity';

export class InMemoryDriverRepository implements IDriverRepository {
  private drivers: Driver[] = [];

  async createDriver(driver: Driver): Promise<void> {
    this.drivers.push(driver);
  }

  async findAll(): Promise<any> {
    
  }

  async findByCpf(cpf: string): Promise<any> {
    
  }
}
