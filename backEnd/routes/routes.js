var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var movieController = require('../controllers/movieController')

router.get('/', HomeController.index);

router.post('/movie', movieController.create)
router.get('/movie/:id', movieController.moviesearchid)
router.get('/title', movieController.buscar)
router.get('/movie', movieController.search)

router.get('/movie', movieController.escrever)
module.exports = router;