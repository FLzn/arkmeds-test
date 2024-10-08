import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userController = new UserController();
const router = Router();

router.get('/users', userController.getUser.bind(userController));

export default router;
