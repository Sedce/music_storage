var express = require('express');
var consolidate = require('consolidate');
var bodyparser = require('body-parser');
var app = express();

var user = require('./models')._user;
var admin = require('./models')._admin;
var artist = require('./models')._artist;
var album = require('./models')._album;
var song = require('./models')._song;

app.set('views', './templates');
app.engine('html', consolidate.nunjucks);

app.use(express.static('./assets'));
app.use(express.static('./images'));
app.use(express.static('./lib'));
app.use(express.static('./templates'));
app.use(express.static('./main'));

app.use(bodyparser.urlencoded());

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

/*
    Post
*/
app.post('/signup', function(request, response){
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const username = request.body.username;
    const email = request.body.email;
    const password = request.body.password;

    user.create({fname: firstname, lname: lastname, username: username, password: password, email:email}).then(function(){
        response.redirect('/');
    })
});

app.post('/login', function(request, response){
    const username = request.body.username;
    const password = request.body.password;

    user.findOne({where: {username: username, password: password}}).then(function(){
        console.log(request.body);
        if(user.username === username){
            console.log("true");
            response.redirect('/profile');
        }else{
            response.redirect('/');
        }
    });
});

//For testing
app.get('/tests', function(request, response) {
  response.render('tests.html');
});

app.listen(3000, function(){
  console.log('Now listening to port 3000');
});
