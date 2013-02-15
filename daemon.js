
var models = require('./models');
var Draw = models.draw;
var Counter = models.counter;

var numbers = Array();
while(numbers.length <= 19) {
  var number = Math.floor(Math.random() * 81);
  if(!(number in numbers)) {
    numbers.push(number);
  }
}

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

draw.save(function (error) {
  if (error) {
    console.log('we got an error');
  } else {
    console.log('draw saved: ' + draw.id);
  }
});

Counter.increment('draw', function (err, result) {
    if (err) {
        console.error('Counter on draw save error: ' + err); 
        return;
    }
    photo.cid = result.next;
    photo.save();
});


