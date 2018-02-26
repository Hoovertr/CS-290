var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 9747);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res){
	var sentTable = [];
	for (var p in req.query){
		sentTable.push({'Name': p, 'Value': req.query[p]});
	}
	var content = {};
	content.sentData = sentTable;
	content.requestType = "GET";
	res.render('getPost', content);	
});

app.post('/', function(req,res){
	var sentTable = [];
	for (var p in req.query){
		sentTable.push({'Name':p , 'Value':req.query[p]});
	}
	var recTable = [];
	for (var p in req.body){
		recTable.push({'Name':p , 'Value':req.body[p]});
	}
	var content = {};
	content.sentData = sentTable;
	content.recData = recTable;
	content.requestType = "POST";
	res.render('getPost', content);
});

app.use(function(req,res){
	res.type('test/plain');
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
