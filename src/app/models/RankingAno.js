const Sequelize = require('sequelize');

class RankingAno extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        ano: Sequelize.INTEGER,
        quantidade: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: 'ranking_ano',
      }
    );

    return this
  }


}

module.exports = RankingAno;