const { Router } = require('express');

const router = new Router();

const RankingController = require('./app/Controllers/RankingController');

router.get('/ranking', RankingController.buscarTodos);
router.get('/ranking/:ano', RankingController.buscarPorAno);
router.get('/ranking/:ano/:mes', RankingController.buscarPorAnoEMes);
router.get('/ranking/:ano/:mes/:seguimento', RankingController.buscarPorAnoMesSeguimento);
router.get('/ranking/:ano/:mes/:seguimento/:subseguimento', RankingController.buscarPorAnoMesSeguimentoSubseguimento);
router.get('/carro/:modelo/:subseguimento', RankingController.buscarPorAutomovel);
router.get('/dezMaisEmplacadosAutomoveis', RankingController.dezMaisEmplacadosAutomoveis);
router.get('/dezMenosEmplacadosAutomoveis', RankingController.dezMenosEmplacadosAutomoveis);
router.get('/dezMaisEmplacadosComerciaisLeves', RankingController.dezMaisEmplacadosComerciaisLeves);
router.get('/dezMenosEmplacadosComerciaisLeves', RankingController.dezMenosEmplacadosComerciaisLeves);
router.get('/emplacadosPorAno', RankingController.emplacadosPorAno);
router.get('/tipo/:tipo', RankingController.emplacadosPorTipo);


router.get('/', (req, res) => {
  res.json({ message: 'Olá, bem vindo' })
})

router.get('*', (req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' })
})

module.exports = router;