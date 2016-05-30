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
app.set('port', 3001);

app.get('/',function(req,res,next){
	var context = {};
	pool.query('SELECT * FROM workouts', function(err, rows, fields){
		
		if(err){
			next(err);
			return;
		}
		
		console.log(rows);
		context.rows = rows;
		res.render('home', context);
	});
});

app.get('/reset-table',function(req,res,next){
	pool.query("DROP TABLE IF EXISTS workouts", function(err){
		var createString = "CREATE TABLE workouts("+
		"id INT PRIMARY KEY AUTO_INCREMENT,"+
		"name VARCHAR(255) NOT NULL,"+
		"reps INT,"+
		"weight INT,"+
		"date DATE,"+
		"lbs BOOLEAN)";
	
		pool.query(createString, function(err){
			console.log("Table reset");
			res.redirect('/');
		})
	});
});

app.get('/delete',function(req,res,next){
	pool.query("DELETE FROM workouts WHERE id=?", [req.query.id], function(err, result){
		
		if (err){
			next(err);
			return;
		}
		
		console.log(result);
		res.redirect('/');
	});
});

app.get('/insert',function(req,res,next){
	pool.query("INSERT INTO workouts (`name`, `reps`, `weight`, `date`, `lbs`) VALUES (?, ?, ?, ?, ?)", 
		[req.query.name, req.query.reps, req.query.weight, req.query.date, req.query.lbs], 
		function(err, result){
		
		if(err){
			next(err);
			return;
		}
		
		console.log(result);
		res.redirect('/');
	});
});

app.get('/update',function(req,res,next){
	pool.query("UPDATE workouts SET name=?, reps=?, weight=? date=?, lbs=? WHERE id=?",
		[req.query.name, req.query.reps, req.query.weight, req.query.date, req.query.lbs, req.query.id],
		function(err, result){
			
		if(err){
			next(err);
			return;
		}
		
		console.log(result);
		res.redirect('/');
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
	console.log('Express started on 52.37.44.63:' + app.get('port') + '; press Ctrl-C to terminate.');
});