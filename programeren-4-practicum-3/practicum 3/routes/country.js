// API version country
var express = require('express');
var router = express.Router();
var path = require('path');
// var recipes = require('../recepies.js');

router.get('/info', function(request, response) {
 response.status(200);
 response.json({
 "description": "Recipes"
 });
});
/*
router.get('/recipes', function(request,response){
	response.json(recipes)
});

router.get('/recipes/:id', function(request,response){
	var id = request.params.id || '';
	var recipe = recipes[id];
	response.json(recipe);
});
*/
router.get('/countries', function(request, response){
	response.status(200);
	response.json({
		"description": "Recipes"
	});
});

router.get('/countries/:id', function(request, response){
	response.status(200);
	var id = request.params.id || '';
	var country = countries[id];
	response.json(country);
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