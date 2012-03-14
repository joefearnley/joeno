
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
});

var DrawSchema = new mongoose.Schema({
  spot: Number,
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

mongoose.model('Draw', DrawSchema);
mongoose.model('User', UserSchema);

module.exports = {
  User: UserSchema,
  Draw: DrawSchema
};
