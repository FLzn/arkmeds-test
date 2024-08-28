import { IDriverRepository } from '../../domain/interfaces/IDriverRepository';
import AppDataSource from '../../main/data-source';
import { DriverRepository } from '../repositories/DriverRepository';
import { InMemoryDriverRepository } from '../repositories/InMemoryDriverRepository';

export function getDriverRepository(): InMemoryDriverRepository | DriverRepository {
  if (process.env.NODE_ENV === 'test') {
    return new InMemoryDriverRepository();
  }
  return new DriverRepository(AppDataSource);
}
