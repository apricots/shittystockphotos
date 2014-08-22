
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

// put mongoose schemas here

var app = express();

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}





mongoose.connect(process.env.MONGOLAB_URI || 'localhost:27017/shitty-dev', function(err) {
  if (err) throw err;

  app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });
});

