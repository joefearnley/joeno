var mongoose = require('mongoose');
var config = require('../config/dev').config;
mongoose.connect('mongodb://'+config.mongo.host+'/'+config.mongo.db);
exports.mongoose = mongoose;
