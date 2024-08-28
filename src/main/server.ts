import express from 'express';
import passengerRoutes from '../infra/routes/passengerRoutes';
import driverRoutes from '../infra/routes/driverRoutes';
import AppDataSource from './data-source';
import "reflect-metadata";

const app = express();
const PORT = process.env.PORT || 3333;

AppDataSource.initialize()
  .then(() => {
    app.use(express.json());
    app.use(driverRoutes)
    app.use(passengerRoutes)

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });