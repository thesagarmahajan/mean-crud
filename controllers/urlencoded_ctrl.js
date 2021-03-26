const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

let userSchema = new mongoose.Schema({
    full_name:String,
    email:String,
    phone:String,
    password:String
});

const userModel = mongoose.model('user', userSchema, 'users');

const constr = "mongodb://localhost:27017/shamProject";

mongoose.connect(constr, {useNewUrlParser: true, useUnifiedTopology: true});

router.use(bodyparser.urlencoded({
    extended: true
}));

router.post("/createUser", function(req, res){
    var user = new userModel();
    
    for(key in req.body){
        user[key] = req.body[key];
    }
    
    user.save(function(err, data){
        if(err){
            res.status(500).json({"status_message":err.toString()});
            console.log(err);
        }
        else{
            res.status(200).json({"status_message":"user_created_successfully"});
        }
    });
});

router.get("/getAllUsers", function(req,res){
    userModel.find(function(err,data){
        if(err){
            res.status(500).json({"status_message":err.toString()});
            console.log(err);
        }
        else{
            res.status(200).json({"payload":data});
        }
    });
});

module.exports= router;