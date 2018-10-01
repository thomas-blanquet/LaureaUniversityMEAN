const mongoose = require('mongoose');

mongoose.connect('mongodb://thomas:laureathomas2018@ds117070.mlab.com:17070/laurea-mean');//

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected.');
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose error:', err);
});
mongoose.connection.on('connected', function() {
  console.log('Mongoose disconnected.');
});

require('./appSchema');
