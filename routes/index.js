/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'home page'
  });
};

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

  // save to mongo
  //
  // Where do we invoke mongo??? app.js??
  

  // retrieve
  //
  // invoke socket.io ?
  //
  res.render('draw', { 
    title: 'draw',
    drawingNumber: 2
  })
};
