import { Request, Response } from 'express';
// import { GetUserUseCase } from '../../application/usecases/GetUserUseCase';
// import { InMemoryUserRepository } from '../repositories/InMemoryUserRepository';

export class UserController {
//   private getUserUseCase: GetUserUseCase;

  constructor() {
    // const userRepository = new InMemoryUserRepository();
    // this.getUserUseCase = new GetUserUseCase(userRepository);
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    res.send('Caiu no endpoint');
    // const user = await this.getUserUseCase.execute(req.params.id);
    // if (user) {
    //   res.status(200).json(user);
    // } else {
    //   res.status(404).json({ message: 'User not found' });
    // }
  }
}
