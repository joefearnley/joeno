
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/joeno_test');

var CounterSchema = new mongoose.Schema({
    _id: String,
    next: { 
      type: Number, 
      default: 1 
    }
});

CounterSchema.statics.increment = function (counter, callback) {
  return this.findByIdAndUpdate(counter, { 
      $inc: { next: 1 } 
    }, {
      new: true, 
      upsert: true, 
      select: {
        next: 1
      }
    }, 
    callback);
};


module.exports.counter = mongoose.model('Counter', CounterSchema);
