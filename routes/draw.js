
var mongoose = require('mongoose');
require('../models/draw');

/*
 * GET draw.
 */
exports.show = function(req, res){
  var drawId = req.params.id;
  var Draw = mongoose.model('Draw');

  Draw.findOne({ 'drawid': drawId }, function(error, draw) {
    if(error) {
      // handle the error here some how
      console.log('Error Encountered : ' + error);
    }

    // render the draw template.
    res.render('draw', { 
      title: 'Joeno',
      id: drawId 
    });

  });
}
