import { Driver } from '../../domain/entities/Driver';
import { IDriverRepository } from '../../domain/interfaces/IDriverRepository';

export class InMemoryDriverRepository implements IDriverRepository {
  private drivers: Driver[] = [];

  async createDriver(driver: Driver): Promise<void> {
    this.drivers.push(driver);
  }
}
