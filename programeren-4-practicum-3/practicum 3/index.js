var config = require('./config/config.json');
var express = require('express');
var app = express();

app.set('PORT', config.webPort);

app.all('*', function(request, response, next) {
 console.log(request.method + " " + request.url);
 next();
})
<<<<<<< HEAD

//app.use('/api/v1', require('./routes/country'));
app.use('/api/v1', require('./routes/city'));
=======
// test github
app.use('/api/v1', require('./routes/routes_api_v1'));
app.use('/api/v2', require('./routes/routes_api_v2'));
>>>>>>> country

app.all('*', function(request, response) {
 response.status(404);
 response.send('404 - Not found');
})

var port = process.env.PORT || app.get('PORT');
app.listen(port, function() {
 console.log('Server app is listening on port' + port);
})