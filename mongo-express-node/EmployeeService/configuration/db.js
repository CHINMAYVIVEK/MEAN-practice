var mon = require('mongoose');
const url = "mongodb://localhost:27017/ChinmayDB";
exports.url = url;
// database will be created run time
const mych = mon.Schema;
// Allow to create Scheme
const mem = new mych({
    username: String,
    password: String,
    age: Number
});
exports.mem = mem;
