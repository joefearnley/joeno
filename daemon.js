
var numbers = Array();
while(numbers.length <= 19) {
  var number = Math.floor(Math.random() * 81);
  if(!(number in numbers)) {
    numbers.push(number);
  }
}


//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/joeno1');

var Draw = require('./models').Draw;

console.log(Draw);
var draw = new Draw({
  spot1: numbers[1],
  spot2: numbers[2],
  spot3: numbers[3],
  spot4: numbers[4],
  spot5: numbers[5],
  spot6: numbers[6],
  spot7: numbers[7],
  spot8: numbers[8],
  spot9: numbers[9],
  spot10: numbers[10],
  spot11: numbers[11],
  spot12: numbers[12],
  spot13: numbers[13],
  spot14: numbers[14],
  spot15: numbers[15],
  spot16: numbers[16],
  spot17: numbers[17],
  spot18: numbers[18],
  spot19: numbers[19],
  spot20: numbers[20]
});

// save to mongo
draw.save(function (err) {

  console.log('lkasdfjlk;ajsdlf');

  if(!err) {
    console.log('drawing saved!');
  } else {
    console.log('error saving draw');
  }
});

// retrieve from mongo
Draw.find({}).limit(1).exec(function (err, docs) {
    //
    // start looping...
    //
    console.log(docs);
});


