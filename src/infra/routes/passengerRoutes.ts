import { Router } from 'express';
import { PassengerController } from '../controllers/PassengerController';

const passengerController = new PassengerController();
const router = Router();

// router.get('/drivers', driverController.getAllDrivers.bind(driverController));
// router.get('/drivers/:id', driverController.getDriverById.bind(driverController));
router.post('/passengers', passengerController.createPassenger.bind(passengerController));
// router.put('/drivers/:id', driverController.updateDriver.bind(driverController));
// router.delete('/drivers/:id', driverController.deleteDriver.bind(driverController));

export default router;
