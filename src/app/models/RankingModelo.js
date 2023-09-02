const Sequelize = require('sequelize');

class RankingModelo extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        marca: Sequelize.STRING,
        modelo: Sequelize.STRING,
        subseguimento: Sequelize.INTEGER,
        quantidade: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: 'ranking_modelo',
      }
    );

    return this
  }


}

module.exports = RankingModelo;