const Sequelize = require('sequelize');

class RankingTipo extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        marca: Sequelize.STRING,
        modelo: Sequelize.STRING,
        subseguimento: Sequelize.INTEGER,
        tipo: Sequelize.STRING,
        total: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: 'carro_tipo_soma',
      }
    );

    return this
  }


}

module.exports = RankingTipo;