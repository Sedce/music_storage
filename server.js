var express = require('express');
var consolidate = require('consolidate');
var app = express();

app.set('views', './templates');
app.engine('html', consolidate.nunjucks);

app.use(express.static('./assets'));
app.use(express.static('./images'));
app.use(express.static('./lib'));
app.use(express.static('./templates'));
app.use(express.static('./main'));


app.get('/', function(request, response){
  response.render('index.html');
});

app.get('/login', function(request, response){
  response.render('login.html');
});

app.get('/signup', function(request, response){
  response.render('signup.html');
});

app.get('/profile', function(request, response){
  response.render('profile.html');
});


app.listen(3000, function(){
  console.log('Now listening to port 3000');
});
