import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';
import { AppointmentModel } from './models/AppointmentModel';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'multikjas',
  models: [UserModel, AppointmentModel],
});

export default sequelize;