'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('ranking',
      {
        ano: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        mes: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        seguimento: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        subseguimento: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        posicao: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        marca_modelo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        marca: {
          type: Sequelize.STRING,
          allowNull: false
        },
        modelo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        quantidade: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
      }
    );

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('ranking');

  }
};
