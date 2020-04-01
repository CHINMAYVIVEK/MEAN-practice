const { mems } = require("../models/model_dhar");

var exp = require('express');
var bp = require('body-parser');
// Create Restful API for Routing (httpGet, httpPost, HttpDelete)

var app = exp(); // express give features for routing and hosting

exports.app = app;
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

// http://localhost:4000/Register
app.post('/Register', function (req, res) {
    let userData = req.body;
    var ptr = new mems(userData);
    ptr.save(function (err, data) {
        if (err) {
            console.log('error while saving');
        }
        else {
            res.send('saved');
        }
    });
});

// http://localhost:4000/Login
app.post('/Login', function (req, res) {
    let userData = req.body;
    mems.findOne({ username: userData.username }, function (error, user) {
        if (error) {
            console.log('error');
        }
        else {
            if (!user) {
                res.status(401).send('invalid username');
            }
            else {
                if (user.password !== userData.password) {
                    res.status(401).send('invalid password');
                }
                else {
                    res.send(user);
                }
            }
        }
    });
});