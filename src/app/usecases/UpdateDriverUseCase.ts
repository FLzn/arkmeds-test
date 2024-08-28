import { Driver } from "../../domain/entities/Driver";
import { RoleEnum } from "../../domain/enums/RoleEnum";
import { IDriverRepository } from "../../domain/interfaces/IDriverRepository";

export class UpdateDriverUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  public async execute(newInformation: Driver, driverId: number): Promise<any | null> {
    const { name, sex, age, cpf, address } = newInformation;

    const findDriver = await this.driverRepository.findById(driverId);
    if (!findDriver) {
      throw new Error('Motorista não encontrado.');
    }

    // const role = RoleEnum.DRIVER;

    // const newDriver = new Driver(name, cpf, age, sex, address, role);
    await this.driverRepository.updateDriver(findDriver, newInformation);
  }
}