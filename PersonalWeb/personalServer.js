var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 5522);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('javas'));

app.get('/', function(req, res, next){
	var context = {};
	res.render('homePage', context);
});

app.get('/page1', function(req, res, next){
	var context = {};
	res.render('firstPage', context);
});

app.get('/page2', function(req, res, next){
	var context = {};
	res.render('secondPage', context);
});
app.get('/page3', function(req, res, next){
	var context = {};
	res.render('thirdPage', context);
});

app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

app.use(function(err,req,res,next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://flip1.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
