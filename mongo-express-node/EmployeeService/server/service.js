const { app } = require("../endpoint/app");

// Hosting
app.listen(4000,function(){
    console.log('service started');
})