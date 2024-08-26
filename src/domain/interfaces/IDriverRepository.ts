import { DriverEntity } from '../../infra/entities/DriverEntity';
import { Driver } from '../entities/Driver';

export interface IDriverRepository {
  createDriver(driver: Driver): Promise<void>;
  findAll(): Promise<Driver[] | null>;
  findByCpf(cpf: string): Promise<DriverEntity | null>;
}