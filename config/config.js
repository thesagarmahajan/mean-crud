module.exports = {
    db:{
        dburl:"mongodb://localhost:27017/shamProject",
        collections:{
            users:{
                full_name:String,
                email:String,
                phone:String,
                password:String
            }
        }
    },
    require:{
        express : require('express'),
        router : require('express').Router(),
        mongoose : require('mongoose'),
        multer : require('multer'),
        upload : require('multer')(),
        bodyparser: require('body-parser')
    }
}