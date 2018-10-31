const mongoose = require('mongoose');

const sport = mongoose.model('sport');

const sportList = function(req, res) {
  sport.find({}, function(err, sports) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(sports);
    }
  })
}

const addSport = function(req, res) {
  sport.create(req.body, function(err, newSport) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(newSport);
    }
  })
}

module.exports = {
  sportList,
  addSport
}
