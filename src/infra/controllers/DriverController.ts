import { Request, Response } from 'express';
import { InMemoryDriverRepository } from '../repositories/InMemoryDriverRepository';
import { CreateDriverUseCase } from '../../app/usecases/CreateDriverUseCase';
import { DriverRepository } from '../repositories/DriverRepository';
import AppDataSource from '../../main/data-source';

export class DriverController {
  private createDriverUseCase: CreateDriverUseCase;

  constructor() {
    // const driverRepository = new InMemoryDriverRepository();
    const driverRepository = new DriverRepository(AppDataSource);
    this.createDriverUseCase = new CreateDriverUseCase(driverRepository);
  }

  public async createDriver(req: Request, res: Response): Promise<void> {
    try {
      await this.createDriverUseCase.execute(req.body);
      res.status(201).send({ message: 'Motorista cadastrado com sucesso!' });
    } catch (error: any) {
      res.status(400).json({ message: 'Erro ao criar o motorista', details: error.message });
    }
  }
}
