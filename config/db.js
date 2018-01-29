const mongoose = require('mongoose');
//Database Name
const dbName = "mydbrestapi";

const conString = "mongodb://user123:user123@ds117848.mlab.com:17848/" + dbName;

mongoose.connect(conString, (err)=>{
    if(err){
        console.log("Failed!! Error Connecting database: " +err);
    }else{
        console.log("Congratulation! Successfully connected to database ");
    }
});
