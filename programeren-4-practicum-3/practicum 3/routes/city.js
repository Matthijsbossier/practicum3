var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('..config/db');

router.get('/info', function(request, response) {
    response.status(200);
    response.json({
        "description": "Info about cities"
    });
});

router.get('/cities', function(request, response){
    response.status(200);
    response.json();
    db.query('SELECT * FROM city', function(error, rows, fields){
        if (error) {
            res.status(400).json(error);
        } else {
            res.status(200).json(rows);
        }
    })

});

router.get('/cities:id', function (req, res){
    res.status(200);
    res.json();
});


module.exports = router;