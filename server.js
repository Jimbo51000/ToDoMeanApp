var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var app = express();

//View engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

//Static folder

app.use(express.static(path.join(__dirname, 'client')));

//body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', tasks);

app.listen(3000, function () {
    console.log('Server started on port 3000');
})