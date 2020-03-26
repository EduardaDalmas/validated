import 'dotenv/config';
import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

import Card from '../app/models/Card';
import User from '../app/models/User';

const models = [Card, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(process.env.DATABASE_URL, dataBaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
