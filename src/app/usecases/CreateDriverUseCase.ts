import { Driver } from "../../domain/entities/Driver";
import { RoleEnum } from "../../domain/enums/RoleEnum";
import { IDriverRepository } from "../../domain/interfaces/IDriverRepository";

export class CreateDriverUseCase {
  constructor(private driverRepository: IDriverRepository) {}

  public async execute(body: Driver): Promise<any | null> {
    const { name, sex, age, cpf, address } = body;

    const findExistentCpf = await this.driverRepository.findByCpf(cpf);
    if (findExistentCpf) {
      throw new Error('Motorista já cadastrado com esse CPF.');
    }

    const role = RoleEnum.DRIVER;

    const newDriver = new Driver(name, cpf, age, sex, address, role);
    await this.driverRepository.createDriver(newDriver);
  }
}