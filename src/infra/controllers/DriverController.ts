import { Request, Response } from 'express';
import { CreateDriverUseCase } from '../../app/usecases/CreateDriverUseCase';
import { DriverRepository } from '../repositories/DriverRepository';
import AppDataSource from '../../main/data-source';
import { GetDriversUseCase } from '../../app/usecases/GetDriversUseCase';
import { DriverEntity } from '../entities/DriverEntity';
// import { InMemoryDriverRepository } from '../repositories/InMemoryDriverRepository';

export class DriverController {
  private createDriverUseCase: CreateDriverUseCase;
  private getDriversUseCase: GetDriversUseCase;

  constructor() {
    // const driverRepository = new InMemoryDriverRepository();
    const driverRepository = new DriverRepository(AppDataSource);
    this.createDriverUseCase = new CreateDriverUseCase(driverRepository);
    this.getDriversUseCase = new GetDriversUseCase(driverRepository);
  }

  public async createDriver(req: Request, res: Response): Promise<void> {
    try {
      await this.createDriverUseCase.execute(req.body);
      res.status(201).send({ message: 'Motorista cadastrado com sucesso!' });
    } catch (error: any) {
      res.status(400).json({ message: 'Erro ao criar o motorista', details: error.message });
    }
  }

  public async getAllDrivers(req: Request, res: Response): Promise<void> {
    try {
      const drivers: DriverEntity[] = await this.getDriversUseCase.execute();
      res.status(200).json(drivers);
    } catch (error: any) {
      res.status(400).json({ message: 'Erro ao trazer motoristas.', details: error.message });
    }
  }
}
