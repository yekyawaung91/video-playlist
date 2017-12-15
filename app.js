
var express = require('express');
var vidoeController = require('./controllers/videoController');

//load express server
var app = express();

//setup template engine
app.set('view engine','ejs');

//set static file path
app.use('/assets',express.static('assets'));

vidoeController(app);
console.log('server is started');

//set server port
app.listen(3000);