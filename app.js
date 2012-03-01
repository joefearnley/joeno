/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var hbs = require('./node_modules/hbs/lib/hbs');

var mongoose = require('mongoose').Mongoose;

express.view.register('.hbs', hbs);

var app = module.exports = express.createServer();

/*
 * Configuration
 */
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

/*
 * Routes
 */
app.get('/', routes.index);
app.get('/draw/:id', routes.draw);


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
