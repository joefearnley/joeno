/**
 * GET maind index page.
 */
exports.index = function(req, res){
  res.render('index', {
    title: 'home page'
  });
};

/**
 * Main drawing page......
 *
 */
exports.draw = function(req, res){
  var drawNumber = req.params.id;

  // build an array of random numbers...
  //
  // TODO: extract to a method and unit test
  //
  var numbers = Array();
  while(numbers.length <= 19) {
    var number = Math.floor(Math.random() * 81);
    if(!(number in numbers)) {
      numbers.push(number);
    }
  }

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/joeno');

  //
  // save to mongo
  //
  // retrieve from mongo
  //
  // invoke socket.io ?
  //

  // render results
  res.render('draw', {
    title: 'draw',
    drawingNumber: 2
  })
};
