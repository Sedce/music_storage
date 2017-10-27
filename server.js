var express = require('express');
var app = express();

app.set('views', './templates');

app.get('/', function(request, response){
  response.send('Home Page');
});

app.get('/profile', function(request, response){
  response.send('Profile Page');
});

app.listen(2000, function(){
  console.log('Now listening to port 2000');
});
