const mongoose = require('mongoose');

const surfSpotSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  country: {
    type:String,
    required:true
  },
  region: {
    type:String,
    required:true
  },
});

const sportSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
});

mongoose.model('surfspot', surfSpotSchema);
mongoose.model('sport', sportSchema);
