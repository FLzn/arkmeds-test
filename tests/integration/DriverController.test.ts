import { Request, Response } from 'express';
import { DriverController } from '../../src/infra/controllers/DriverController';
import { InMemoryDriverRepository } from '../../src/infra/repositories/InMemoryDriverRepository';
import { Driver } from '../../src/domain/entities/Driver';

describe('DriverController', () => {
  let driverController: DriverController;
  let driverRepository: InMemoryDriverRepository;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let resMock: any;

  beforeEach(() => {
    driverRepository = new InMemoryDriverRepository();
    driverController = new DriverController();

    resMock = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    req = {
      body: {
        name: 'Rafael Gonçalves',
        cpf: '69631159663',
        age: 23,
        sex: 'M',
        address: {
          zipCode: '38050470',
          street: 'Avenida Maranhão',
          number: '350',
          neighborhood: 'Santa Maria',
        },
      },
    };

    res = resMock;
  });

  it('should create a new driver', async () => {
    await driverController.createDriver(req as Request, res as Response);

    expect(resMock.status).toHaveBeenCalledWith(201);
    expect(resMock.send).toHaveBeenCalledWith({ message: 'Motorista cadastrado com sucesso!' });
  });

  // Outros testes podem ser adicionados para diferentes cenários, como validações
});
