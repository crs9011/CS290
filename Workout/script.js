var express = require('express');
var mysql = require('mysql');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var pool = mysql.createPool({
  host  : 'localhost',
  user  : 'student',
  password: 'default',
  database: 'student'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 8888);

app.get('/',function(req,res,next){
	res.render('home');
});

app.get('/select',function(req,res,next){
	var context = {};
	pool.query('SELECT * FROM workouts', function(err, rows, fields){
		
		if(err){
			next(err);
			return;
		}
		
		context.results = JSON.stringify(rows);
		res.render('home', context);
	});
});

app.get('/reset-table',function(req,res,next){
	var context = {};
	
	pool.query("DROP TABLE IF EXISTS workouts", function(err){
		var createString = "CREATE TABLE workouts("+
		"id INT PRIMARY KEY AUTO_INCREMENT,"+
		"name VARCHAR(255) NOT NULL,";
	
		pool.query(createString, function(err){
			context.results = "Table reset";
			res.render('home',context);
		})
	});
});

app.get('/insert',function(req,res,next){
	var context = {};
	pool.query("INSERT INTO workouts (`name`) VALUES (?)", [req.query.name], function(err, result){
		
		if(err){
			next(err);
			return;
		}
		
		context.results = "Inserted id " + result.insertId;
		res.render('home',context);
	});
});

app.get('/update',function(req,res,next){
	var context = {};
	pool.query("UPDATE workouts SET name=?, reps=?, weight=? date=?, lbs=? WHERE id=? ",
		[req.query.name, req.query.reps, req.query.weight, req.query.date, req.query.lbs, req.query.id],
		function(err, result){
			
		if(err){
			next(err);
			return;
		}
		
		context.results = "Updated " + result.changedRows + " rows.";
		res.render('home',context);
	});
});

app.use(function(req,res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});