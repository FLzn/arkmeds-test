import { Router } from 'express';
import { DriverController } from '../controllers/DriverController';

const driverController = new DriverController();
const router = Router();

router.get('/drivers', driverController.getAllDrivers.bind(driverController));
router.get('/drivers/:id', driverController.getDriverById.bind(driverController));
router.post('/drivers', driverController.createDriver.bind(driverController));
router.put('/drivers/:id', driverController.updateDriver.bind(driverController));
router.delete('/drivers/:id', driverController.deleteDriver.bind(driverController));

export default router;
