
var mongoose = require('mongoose');

/*
 * GET draw.
 */
exports.show = function(req, res){
  var drawId = req.params.id;

  Draw.findOne({ 'drawid': drawId }, function(error, draw) {
    if(error) {
      // handle the error here some how
      console.log('Error Encountered : ' + error);
    }

    // render the draw template.
  });
}
