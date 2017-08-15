var mongodb = require("mongojs");

var db = mongodb("MongoDb" , ["Users"]);


var users = [{
    "user" : "Sikander",
    "age" : 25
}];


db.Users.insert(users, ()=> {
    console.log("DATA INSERTED SUCCESFULLY");
});


db.Users.find(function(err,docs){
    console.log(docs);
})
