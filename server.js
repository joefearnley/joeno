/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('./util/connect').mongoose
  , config = require('./config/dev').config
  , draw = require('./routes/draw');

var app = express();

/**
 * Configurations
 */
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/**
 * Routes
 */
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/draw/:id', draw.show);

/**
 * Start server
 */
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/**
 * start creating draws...
 */
var i = 0;
var drawInterval = setInterval(function(){

  var draw = getDraw();

  // display a number every 5 seconds.
  var numberInterval = setInterval(function() {
    // grab nest number in the draw
  }, 5000);

  // now wait 3 minutes
  // should display a countdown in the UI
},180000);


function getDraw() {
  var Draw = mongoose.model('Draw');
  var Counter = mongoose.model('Counter');

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
    pot6: numbers[6],
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

  var counter = Counter.increment('draw', function (error, result) {
    if (error) {
        console.error('Counter on draw save error: ' + err); 
    }
    draw.drawid = result.next;
    draw.save();
    console.log('Saving draw : ' + draw.drawid);
  });
}

