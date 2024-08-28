import { IDriverRepository } from "../../domain/interfaces/IDriverRepository";
import { PeopleEntity } from "../../infra/entities/PeopleEntity";

export class GetDriverByIdUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  public async execute(id: number): Promise<PeopleEntity | null> {
    return await this.driverRepository.findById(id);
  }
}