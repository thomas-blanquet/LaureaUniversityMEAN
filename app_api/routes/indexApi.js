const express = require('express');
const router = express.Router();

const ctrlApiSport = require('../controllers/ctrlApiSport');
const ctrlApiSurfSpot = require('../controllers/ctrlApiSurfSpot');

router.route('/sport').get(ctrlApiSport.sportList).post(ctrlApiSport.addSport);
router.route('/surfspot').get(ctrlApiSurfSpot.spotList).post(ctrlApiSurfSpot.addSpot);

module.exports = router;
