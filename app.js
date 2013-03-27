/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
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
 * Connect to database
 */
mongoose.connect('mongodb://'+config.mongo.host+'/'+config.mongo.db);

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

  // display a number every 5 seconds.
  var numberInterval = setInterval(function() {
    // grab nest number in the draw
  }, 5000);

  // now wait 3 minutes
  // should display a countdown in the UI
},180000);

