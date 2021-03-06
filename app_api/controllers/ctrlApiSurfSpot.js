const mongoose = require('mongoose');

const surfspot = mongoose.model('surfspot');

const spotList = function(req, res) {
  surfspot.find({}, function(err, spots) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(spots);
    }
  })
}

const addSpot = function(req, res) {
  surfspot.create(req.body, function(err, newSpot) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(newSpot);
    }
  })
}

module.exports = {
  spotList,
  addSpot
}
