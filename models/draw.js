
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb://localhost/joeno_test');

var DrawSchema = new Schema({
  draw_id: Number,
  spot1: Number,
  spot2: Number,
  spot3: Number,
  spot4: Number,
  spot5: Number,
  spot6: Number,
  spot7: Number,
  spot8: Number,
  spot9: Number,
  spot10: Number,
  spot11: Number,
  spot12: Number,
  spot13: Number,
  spot14: Number,
  spot15: Number,
  spot16: Number,
  spot17: Number,
  spot18: Number,
  spot19: Number,
  spot20: Number
});

export.Draw = mongoose.model('Draw', DrawSchema);

