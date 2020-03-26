import Sequelize, { Model } from 'sequelize';

class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: false,
        },
        title: Sequelize.STRING,
        content: Sequelize.STRING,
      },
      { sequelize, timestamps: false }
    );

    return this;
  }

  static async nextId() {
    const nextId = await Card.max('id');

    return nextId + 1;
  }
}

export default Card;
