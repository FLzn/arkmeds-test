import { DriverEntity } from '../../infra/entities/DriverEntity';
import { Driver } from '../entities/Driver';

export interface IDriverRepository {
  createDriver(driver: Driver): Promise<void>;
  findAll(): Promise<DriverEntity[]>;
  findByCpf(cpf: string): Promise<DriverEntity | null>;
}