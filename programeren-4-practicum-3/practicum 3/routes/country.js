// API version country
var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'node_mysql_user',
	password : process.env.DB_PASSWORD,
	database : 'world'
});


connection.connect();

router.get('/info', function(request, response) {
 response.status(200);
 response.json({
 "description": "Recipes"
 });
});

router.get('/countries', function(request, response){
	response.status(200);
	connection.query('SELECT * from country', function(error, rows, fields) {
			if (error)
				console.log('' + error);
			else
				console.log("gelukt");
				response.json({rows});
		});	
});

router.get('/countries/:id', function(request, response){
	response.status(200);
	connection.query('SELECT * from country', function(error, rows, fields) {
			if (error)
				console.log('' + error);
			else
				console.log("gelukt");
				
				var id = request.params.id || '';
				var country = rows[id];
				response.json({country});
		});
});

router.post('/countries', function(request, response){

});

router.put('/countries/:id', function(request, response){

});

router.delete('/countries/:id', function(request, response){

});

router.get('/search?type=country&continent='+ +'&limit=24', function(request, response){

})

module.exports = router;