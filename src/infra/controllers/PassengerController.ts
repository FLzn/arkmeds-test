import { Request, Response } from 'express';
import { CreateDriverUseCase } from '../../app/usecases/CreateDriverUseCase';
import { DriverRepository } from '../repositories/DriverRepository';
import AppDataSource from '../../main/data-source';
import { GetDriversUseCase } from '../../app/usecases/GetDriversUseCase';
import { InMemoryDriverRepository } from '../repositories/InMemoryDriverRepository';
import { getDriverRepository } from '../factories/repositoryFactory';
import { IDriverRepository } from '../../domain/interfaces/IDriverRepository';
import { PeopleEntity } from '../entities/PeopleEntity';
import { GetDriverByIdUseCase } from '../../app/usecases/GetDriverByIdUseCase.';
import { UpdateDriverUseCase } from '../../app/usecases/UpdateDriverUseCase';
import { DeleteDriverUseCase } from '../../app/usecases/DeleteDriverUseCase';
import { CreatePassengerUseCase } from '../../app/usecases/CreatePassengerUseCase';

export class PassengerController {
  private createPassengerUseCase: CreatePassengerUseCase;
//   private getDriversUseCase: GetDriversUseCase;
//   private getDriverByIdUseCase: GetDriverByIdUseCase;
//   private updateDriverUseCase: UpdateDriverUseCase;
//   private deleteDriverUseCase: DeleteDriverUseCase;

  constructor() {
    const passengerRepository = getDriverRepository();
    this.createPassengerUseCase = new CreatePassengerUseCase(passengerRepository as IDriverRepository);
    // this.getDriversUseCase = new GetDriversUseCase(driverRepository as IDriverRepository);
    // this.getDriverByIdUseCase = new GetDriverByIdUseCase(driverRepository as IDriverRepository);
    // this.updateDriverUseCase = new UpdateDriverUseCase(driverRepository as IDriverRepository);
    // this.deleteDriverUseCase = new DeleteDriverUseCase(driverRepository as IDriverRepository);
  }

  public async createPassenger(req: Request, res: Response): Promise<void> {
    try {
        await this.createPassengerUseCase.execute(req.body); 
        res.status(201).send({ message: 'Passageiro cadastrado com sucesso!' });
    } catch (error: any) {
        res.status(400).json({ message: 'Erro ao criar o passageiro', details: error.message });
    }
  }

//   public async getAllDrivers(req: Request, res: Response): Promise<void> {
//     try {
//       const drivers: PeopleEntity[] = await this.getDriversUseCase.execute();
//       res.status(200).json(drivers);
//     } catch (error: any) {
//       res.status(400).json({ message: 'Erro ao trazer motoristas.', details: error.message });
//     }
//   }

//   public async getDriverById(req: Request, res: Response): Promise<void> {
//     const driverId = Number(req.params.id);

//     try {
//       const driver = await this.getDriverByIdUseCase.execute(driverId);

//       if (!driver) {
//         res.status(404).json({ message: 'Motorista não encontrado' });
//         return;
//       }
//       res.status(200).json(driver);
//     } catch (error: any) {
//       res.status(500).json({ message: 'Erro ao buscar o motorista', details: error.message });
//     }
//   }

//   public async updateDriver(req: Request, res: Response): Promise<void> {
//     try {
//       await this.updateDriverUseCase.execute(req.body, Number(req.params.id));
//       res.status(201).send({ message: 'Motorista cadastrado com sucesso!' });
//     } catch (error: any) {
//       res.status(500).json({ message: 'Erro ao atualizar o motorista', details: error.message });
//     }
//   }

//   public async deleteDriver(req: Request, res: Response): Promise<void> {
//     try {
//       await this.deleteDriverUseCase.execute(Number(req.params.id));
//       res.status(201).json({ message: 'Motorista deletado com sucesso!' })
//     } catch (error: any) {
//       res.status(500).json({ message: 'Erro ao deletar motorista.', details: error.message })
//     }
//   }
}
