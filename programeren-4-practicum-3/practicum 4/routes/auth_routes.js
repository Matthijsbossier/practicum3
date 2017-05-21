/**
 * Created by Matthijs on 21-5-2017.
 */
//
// ./routes/auth_routes.js
//
var express = require('express');
var routes = express.Router();
var db = require('../config/db');
var auth = require('../auth/authentication');


routes.post('/login', function(req, res){

    console.dir(req.body);

    var username = req.body.username;
    var password = req.body.password;

    // test user:
    var username_dummy = "test";
    var password_dummy = "test";

    if (username == username_dummy && password == password_dummy) {
        res.status(200).json({
            "token" : auth.encodeToken(username),
            "username": username
        });
    } else {
        res.status(401).json({"error":"Invalid credentials, bye"})
    }

    // username en wachtwoord uit req.body lezen

    //check of user in systeem bestaat
    // als user bestaat, check wachtwoord
    // als wachtwoord klopt, dan stuur token

});

module.exports = routes;