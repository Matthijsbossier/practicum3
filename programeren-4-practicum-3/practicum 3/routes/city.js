var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/info', function(request, response) {
    response.status(200);
    response.json({
        "description": "Info about cities"
    });
});

router.get('/cities', function(request, response){
    response.status(200);
    response.json();
});

router.get('/cities:id', function (req, res){
    res.status(200);
    res.json();
});


module.exports = router;