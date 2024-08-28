import { IDriverRepository } from "../../domain/interfaces/IDriverRepository";

export class DeleteDriverUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  public async execute(id: number): Promise<void> {
    const driver = await this.driverRepository.findById(id);

    await this.driverRepository.deleteDriver(driver);
  }
}