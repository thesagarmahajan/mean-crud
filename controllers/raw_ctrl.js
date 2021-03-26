const conf = require("../config/config.js");
const req = conf.require;

let userSchema = new req.mongoose.Schema(conf.db.collections.users);

const userModel = req.mongoose.model('users', userSchema);
const user = new userModel();

req.mongoose.connect(conf.db.dburl, {useNewUrlParser: true, useUnifiedTopology: true});

req.router.use(req.bodyparser.json());

req.router.post("/createUser", function(req, res){
    // console.log(req.body);
    // res.status(200).json({"status_message":"HI"});
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

req.router.get("/getAllUsers", function(req,res){
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

module.exports= req.router;