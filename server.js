var express = require('express');
var consolidate = require('consolidate');
var app = express();
var user = require('./database');

app.set('views', './templates');
app.engine('html', consolidate.nunjucks);

app.use(express.static('./assets'));
app.use(express.static('./images'));
app.use(express.static('./lib'));
app.use(express.static('./templates'));
app.use(express.static('./main'));

function requiredLoggin(request, response, next) {
  var loggedIn = true;
  if(loggedIn){
    next();
  }else{
    response.redirect('/login');
  }
}

app.get('/', function(request, response) {
  response.render('index.html');
});

app.get('/login', function(request, response) {
  response.render('login.html');
});

app.get('/signup', function(request, response) {
  response.render('signup.html');
});

app.get('/profile', requiredLoggin, function(request, response) {
  response.render('profile.html');
});

//For testing
app.get('/tests', function(request, response) {
  response.render('tests.html');
});

app.listen(3000, function(){
  console.log('Now listening to port 3000');
});
