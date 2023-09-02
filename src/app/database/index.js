const Sequelize = require('sequelize');

const Ranking = require('../models/Ranking');
const RankingModelo = require('../models/RankingModelo');
const RankingAno = require('../models/RankingAno');

const databaseConfig = require('../../config/database');



const models = [Ranking, RankingModelo, RankingAno];

class Database {
  constructor() {
    this.init();
  }

  init() {


    this.connection = new Sequelize(databaseConfig);


    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))

  }
}

module.exports = new Database();