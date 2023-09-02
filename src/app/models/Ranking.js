const Sequelize = require('sequelize');

class Ranking extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        ano: Sequelize.INTEGER,
        mes: Sequelize.INTEGER,
        seguimento: Sequelize.INTEGER,
        subseguimento: Sequelize.INTEGER,
        posicao: Sequelize.INTEGER,
        marca_modelo: Sequelize.STRING,
        marca: Sequelize.STRING,
        modelo: Sequelize.STRING,
        quantidade: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: 'ranking',
      }
    );

    return this
  }


}

module.exports = Ranking;