var http = require('http');
var config = require('./config/config');
var express = require('express');
var bodyParser = require('body-parser');
var expressJWT = require('express-jwt');
var app = express();

app.set('PORT', config.webPort);

app.all('*', function(request, response, next) {
 console.log(request.method + " " + request.url);
 next();
})

app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


app.use('/api/v1', require('./routes/auth_routes'));
app.use('/api/v1', require('./routes/country'));
app.use('/api/v1', require('./routes/city'));

app.all('*', function(request, response) {
 response.status(404);
 response.send('404 - Not found');
})

var port = process.env.PORT || app.get('PORT');
app.listen(port, function() {
 console.log('Server app is listening on port' + port);
})