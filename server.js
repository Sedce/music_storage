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

app.get('/profile', function(request, response){
  response.render('profile.html', {
    name: 'Charlito Piao',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    musics: [
      'song1',
      'song2',
      'song3'
    ],
    logged: true
  });
});

app.listen(1234, function(){
  console.log('Now listening to port 1234');
});
