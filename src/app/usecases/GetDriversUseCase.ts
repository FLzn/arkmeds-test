import { IDriverRepository } from "../../domain/interfaces/IDriverRepository";
import { PeopleEntity } from "../../infra/entities/PeopleEntity";

export class GetDriversUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  public async execute(): Promise<PeopleEntity[]> {
    return await this.driverRepository.findAll();
  }
}