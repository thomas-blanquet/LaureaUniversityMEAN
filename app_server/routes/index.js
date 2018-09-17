var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlFootball = require('../controllers/ctrlFootball');
var ctrlGolden = require('../controllers/ctrlGoldenBall');

router.get('/', ctrlMain.index);
router.get('/football', ctrlFootball.winners);
router.get('/goldenball', ctrlGolden.winners);

module.exports = router;
