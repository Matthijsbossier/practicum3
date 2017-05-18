// API version country
var express = require('express');
var router = express.Router();
var path = require('path');
var recipes = require('../recepies.js');

router.get('/info', function(request, response) {
 response.status(200);
 response.json({
 "description": "Recipes"
 });
});

router.get('/recipes', function(request,response){
	response.json(recipes)
});

router.get('/recipes/:id', function(request,response){
	var id = request.params.id || '';
	var recipe = recipes[id];
	response.json(recipe);
});

router.get('/api/v1/countries', function(request, response){
	response.status(200);
	response.json();
});

router.get('api/v1/countries/:id', function(request, response){
	response.status(200);
	var id = request.params.id || '';
	var country = countries[id];
	response.json(country);
});

router.post('api/v1/countries', function(request, response){

});

router.put('api/v1/countries/:id', function(request, response){

});

router.delete('api/v1/countries/:id', function(request, response){

});

router.get('api/v1/search?')

module.exports = router;