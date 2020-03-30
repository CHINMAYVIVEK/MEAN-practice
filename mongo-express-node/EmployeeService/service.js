var exp = require('express');
var cor = require('cors');
var mon = require ('mongoose');
var bp = require ('body-parser');
var jwt = require('jsonwebtoken');

const url = "mongodb://localhost:27017/ChinmayDB";
// database will be created run time

const mych = mon.Schema;
// Allow to create Scheme

const mem = new mych({
    username:String,
    password:String,
    age:Number
})
// created structure mem

var mems=mon.model('dhar',mem,'users'); // (model , structure, collection)

mon.connect(url,{useNewUrlParser: true}, function(err){
    if(err){
        console.log('not connected');
    }
    else{
        console.log('connected');
    }
});

// Create Restful API for Routing (httpGet, httpPost, HttpDelete)

var app=exp(); // express give features for routing and hosting
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

// http://localhost:port/Register
app.post('/Register',function(req,res){
let userData = req.body;
var ptr=new mems(userData);

ptr.save(function(err,data){
    if(err)
    {
        console.log('error while saving');
    }
    else{
        res.send('saved');
    }
})

});

// Hosting
app.listen(4000,function(){
    console.log('service started');
})