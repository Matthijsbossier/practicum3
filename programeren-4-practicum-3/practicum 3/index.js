var config = require('./config/config.json');
var express = require('express');
var app = express();

app.set('PORT', config.webPort);

app.all('*', function(request, response, next) {
 console.log(request.method + " " + request.url);
 next();
})

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