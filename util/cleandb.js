
var mongoose = require('mongoose');
var config = require('../config/dev').config;

require('../models/draw');

mongoose.connect('mongodb://'+config.mongo.host+'/'+config.mongo.db);

var Draw = mongoose.model('Draw');


Draw.find({}).exec(function(error, result) { 
  if (error) { 
    // delete all records
  } else {
    console.log('Error deleting all records: ' + error);
  };
});

