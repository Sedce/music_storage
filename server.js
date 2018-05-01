var consolidate = require('consolidate');
var bodyparser = require('body-parser');
var express = require('express');
var db = require('./database');
var app = express();

var user = require('./models')._user;
var admin = require('./models')._admin;
var artist = require('./models')._artist;
var album = require('./models')._album;
var song = require('./models')._song;
var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.onComplete(function(passed){
   if(passed){
       console.log('Success');
   }
    else {
       console.error("Failed");
   }
});

jasmine.execute();

app.set('views', './templates');
app.engine('html', consolidate.nunjucks);

app.use(express.static('./assets'));
app.use(express.static('./images'));
app.use(express.static('./lib'));
app.use(express.static('./templates'));
app.use(express.static('./domain'));
app.use(express.static('./test'));

app.use(bodyparser.urlencoded({ extended: true }));

function requiredLoggin(request, response, next) {
    var loggedIn = true;
    if (loggedIn) {
        next();
    } else {
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
app.post('/signup', function(request, response) {
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const username = request.body.username;
    const email = request.body.email;
    const password = request.body.password;

    user.create({
        fname: firstname,
        lname: lastname,
        username: username,
        password: password,
        email: email
    }).then(function() {
        response.redirect('/');
    })
});

app.post('/login', function(request, response) {
    const username = request.body.username;
    const password = request.body.password;
    console.log("MAO NI: " + username);
    user.findOne({
        where: {
            username: username
        }
    }).then(function(u) {
        // console.log(u)
        if (u === null) {
            console.log("Account do not exist");
            return response.redirect('/');
        }

        if (password === u.password) {
            return response.redirect('/profile');
        } else {
            return response.redirect('/');
        }
    });
});

//For testings
app.listen(process.env.PORT || 3000, function() {
    console.log('Now listening to port 3000');
});
