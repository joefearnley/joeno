
var mongoose = require('./connect').mongoose; 
var readline = require('readline');
require('./stringutil');
require('../models/draw');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Are you sure you want to delete all records [Y/N]? ", function(answer) {

  if(answer.toUpperCase().trim() === 'Y') {
    console.log('removing draw');

    var Draw = mongoose.model('Draw');
    Draw.remove(function(error) {
      if (error) {
        console.log('Error deleting all records: ' + error);
        rl.close();
        process.exit(1);
      } else {
        console.log('Reomoving all records');
      }
    });
  }

  rl.close();
  process.exit(0);
});
