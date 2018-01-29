//import modules
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = require('./config/app');

//PORT
const PORT = process.env.PORT || 3000;


app.get('/', function(req,res){
    res.send("Hello World");
});

app.listen(PORT, function(err){
    if(err) throw err;
    else{
        console.log("Server has started on port: "+ PORT);
    }
});

