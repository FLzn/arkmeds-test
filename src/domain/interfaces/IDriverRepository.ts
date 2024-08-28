import { PeopleEntity } from '../../infra/entities/PeopleEntity';
import { Driver } from '../entities/Driver';

export interface IDriverRepository {
  createDriver(driver: Driver): Promise<void>;
  findAll(): Promise<PeopleEntity[]>;
  findById(id: number): Promise<PeopleEntity | null>;
  findByCpf(cpf: string): Promise<PeopleEntity | null>;
  updateDriver(existentInformation: PeopleEntity, driver: Driver): Promise<void>;
  deleteDriver(a: any): Promise<any>;
}