import { Router } from 'express';
import { DriverController } from '../controllers/DriverController';

const driverController = new DriverController();
const router = Router();

router.get('/drivers', driverController.getAllDrivers.bind(driverController));
router.post('/drivers', driverController.createDriver.bind(driverController));

export default router;
