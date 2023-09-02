const Ranking = require('../models/Ranking');
const RankingAno = require('../models/RankingAno');
const RankingModelo = require('../models/RankingModelo');

class RankingController {


  /**
   * busca todos os registros
   */
  async buscarTodos(req, res) {
    try {
      const todos = await Ranking.findAll();
      return res.status(200).json(todos);
    }
    catch (error) {
      res.status(500).json({ message: error.message })
    }

  }

  /**
   * busca registros por ano
   */
  async buscarPorAno(req, res) {
    try {
      const ranking = await Ranking.findAll({
        where: {
          ano: req.params.ano
        }
      });
      return res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  /**
   * busca registros por ano e mês
   */
  async buscarPorAnoEMes(req, res) {
    try {
      const ranking = await Ranking.findAll({
        where: {
          ano: req.params.ano,
          mes: req.params.mes
        }
      });
      return res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }

  }

  /**
   * busca registros por ano, mês e seguimento
   */
  async buscarPorAnoMesSeguimento(req, res) {
    try {
      const ranking = await Ranking.findAll({
        where: {
          ano: req.params.ano,
          mes: req.params.mes,
          seguimento: req.params.seguimento
        }
      });
      return res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }

  }

  /**
  * busca registros por ano, mês, seguimento e subseguimento
  */
  async buscarPorAnoMesSeguimentoSubseguimento(req, res) {
    try {
      const ranking = await Ranking.findAll({
        where: {
          ano: req.params.ano,
          mes: req.params.mes,
          seguimento: req.params.seguimento,
          subseguimento: req.params.subseguimento
        }
      });
      return res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }

  }

  /**
 * busca registros por Automóvel
 */
  async buscarPorAutomovel(req, res) {
    try {
      const ranking = await Ranking.findAll({
        where: {
          modelo: req.params.modelo,
          subseguimento: req.params.subseguimento
        }
      });
      return res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  /**
 * busca os 10 menos emplacados automoveis
 */
  async dezMenosEmplacadosAutomoveis(req, res) {
    try {
      const ranking = await RankingModelo.findAll({
        limit: 10,
        attributes: { exclude: ['id'] },
        where: { subseguimento: 1 },
        order: ['quantidade']
      });
      return res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  /**
* busca os 10 mais emplacados automoveis
*/
  async dezMaisEmplacadosAutomoveis(req, res) {
    try {
      const ranking = await RankingModelo.findAll({
        limit: 10,
        attributes: { exclude: ['id'] },
        where: { subseguimento: 1 },
      });
      return res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  /**
* busca os 10 menos emplacados Comerciais Leves
*/
  async dezMenosEmplacadosComerciaisLeves(req, res) {
    try {
      const ranking = await RankingModelo.findAll({
        limit: 10,
        attributes: { exclude: ['id'] },
        where: { subseguimento: 2 },
        order: ['quantidade']
      });
      return res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  /**
* busca os 10 mais emplacados comerciais Leves
*/
  async dezMaisEmplacadosComerciaisLeves(req, res) {
    try {
      const ranking = await RankingModelo.findAll({
        limit: 10,
        attributes: { exclude: ['id'] },
        where: { subseguimento: 2 },
      });
      return res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  /**
* busca os 10 mais emplacados comerciais Leves
*/
  async emplacadosPorAno(req, res) {
    try {
      const ranking = await RankingAno.findAll({
        attributes: { exclude: ['id'] },
      });
      return res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

}

module.exports = new RankingController();