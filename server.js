
/**
 * Module dependencies.
 */

var express = require('express');
// var routes = require('./routes');
// var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var braintree = require('braintree');

// put mongoose schemas here

var app = express();

// braintree
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "k2xswjx9jbgxt3xh",
  publicKey: "d3y8pmrm7vknyn3j",
  privateKey: "04f2a60219cda374526ca07ddbe2b1bd"
});

// all environments
app.set('port', process.env.PORT || 4000);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});



mongoose.connect(process.env.MONGOLAB_URI || 'localhost:27017/shitty-dev', function(err) {
  if (err) throw err;

  app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });
});

