import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { AddressEntity } from '../infra/entities/AddressEntity';
import { PeopleEntity } from '../infra/entities/PeopleEntity';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    PeopleEntity,
    AddressEntity,
  ],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
