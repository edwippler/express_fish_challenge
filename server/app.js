console.log('starting up server');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logic = require('./logic.js');

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));  // creates req.body

var fishiesList = [{name: 'walleye'}, {name: 'pike'}, {name: 'muskie'}, {name: 'salmon'}, {name: 'crawfish'}];

app.get('/fish', function(req, res){
  res.send(fishiesList);
});

app.get('/fish/first', function(req, res) {
  res.send(fishiesList[0]);
});

app.get('/fish/first/name', function(req, res) {
  res.send(fishiesList[0].name);
});

app.get('/fish/last', function(req, res) {
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex]);
});

app.get('/fish/last/name', function(req, res) {
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex].name);
});

app.post('/fish/new', function(req, res) {
  var newFish = req.body;
  if (newFish.name === '' || logic.isDuplicate(newFish, fishiesList)) {
    res.sendStatus(400);
  }else {
    fishiesList.push(newFish);
    res.sendStatus(200);
  }
});

app.listen(5000);
