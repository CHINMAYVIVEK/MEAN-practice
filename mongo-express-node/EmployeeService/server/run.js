const { app } = require("../endpoint/register");

// Hosting
app.listen(4000,function(){
    console.log('service started');
})