import { Driver } from "../../domain/entities/Driver";
import { IDriverRepository } from "../../domain/interfaces/IDriverRepository";
import { DriverEntity } from "../../infra/entities/DriverEntity";

export class GetDriversUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  public async execute(): Promise<DriverEntity[]> {
    return await this.driverRepository.findAll();
  }
}