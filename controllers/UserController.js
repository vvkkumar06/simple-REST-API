const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const User = require('../models/user');

//create new user
router.post('/', function(req, res){
    console.log('Adding new user to database...');
    User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, (err, user)=>{
            if(err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

//Featch all users available

router.get('/', function(req,res){
    console.log("Fetching all users from database...")
    User.find({}, function(err, users){
        if(err) res.status(500).send("There was a problem fetching data from database.");
        res.status(200).send(users);
    });
});

//Get single user from database

router.get('/:id', function(req, res){
    console.log('Fetching user detail of id: '+req.params.id);
    User.findById(req.params.id, function(err, user){
        if(err) res.status(500).json({ "message":'Unable to find user', "Id": req.params.id});
        res.status(200).send(user);
    });
});

//delete a user from the database

router.delete('/:id', function(req,res){
    console.log("Deleting user of ID: "+ req.params.id);
    User.findByIdAndRemove(req.params.id, function(err, user){
        if(err) res.status(500).send({"message":"unable to delete user", "Id": req.params.id});
        res.status(200).send({"message":"User deleted successfully!", "Id": req.params.id});
    });
});


//update a single user

router.put('/:id', function(req,res){
    console.log("Updating user of Id: "+ req.params.id);
    User.findByIdAndUpdate(req.params.id, req.body , {new :true }, function(err, user){
        if(err) res.status(500).send({"message":"unable to update user", "Id": req.params.id });
        res.status(200).send({"message":"User updated successfully", "Id": req.params.id});
    });
});

module.exports = router;