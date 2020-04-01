const { mems } = require("../modals/mems");
var exp = require('express');
var bp = require('body-parser');
// Create Restful API for Routing (httpGet, httpPost, HttpDelete)
var app = exp(); // express give features for routing and hosting

exports.app = app;
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
// http://localhost:port/Register
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
