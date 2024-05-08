import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './models/userModel';
import { ArticleModel } from './models/articleModel';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'multikjas',
  models: [UserModel, ArticleModel],
  logging: false
});

export default sequelize;