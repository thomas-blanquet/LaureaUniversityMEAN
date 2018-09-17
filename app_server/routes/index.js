var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlSpotsEurope = require('../controllers/ctrlSpotsEurope');
var ctrlSpotsAmerica = require('../controllers/ctrlSpotsAmerica');

router.get('/', ctrlMain.index);
router.get('/spotseurope', ctrlSpotsEurope.spots);
router.get('/spotsamerica', ctrlSpotsAmerica.spots);

module.exports = router;
