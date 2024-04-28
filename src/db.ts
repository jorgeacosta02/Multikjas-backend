import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/UserModel';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'multikjas',
  models: [UserModel],
});

export default sequelize;