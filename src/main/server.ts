import express from 'express';
import userRoutes from '../infra/routes/userRoutes';
// import { UserController } from '../infrastructure/controllers/UserController';

const app = express();
app.use(userRoutes)
// const userController = new UserController();

// app.get('/users/:id', userController.getUser.bind(userController));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
