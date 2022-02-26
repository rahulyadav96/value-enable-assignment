const jwt = require("jsonwebtoken");
const User = require('../models/user.model');

const getNewToken = (user)=>{
    return jwt.sign({id:user.id}, process.env.JWT_SECRETE_KEY);
}
//controller signup
const signUp = async(req,res)=>{
    try{
      
        //check if user already registred or not 
        const registered = await User.findOne({email:req.body.email})
        
        //if yes then return with error
        if(registered) return res.status(401).json({status:"failed", msg:"This email is Already in use"});
        
        //if not create new user
        const user = await User.create(req.body);

        //create token of user
        const token = getNewToken(user);

        //return userdata with token
        return res.status(201).send({token,user});
    }catch(err){
        
        return res.status(500).json({status:"failed", msg:"something went wrong"})
    }

}

//signin controller
const signIn = async (req,res)=>{
    try{
        //find the user with email
        const user = await User.findOne({email:req.body.email}).exec(); // do not use lean() , beacause it return json object that cause error while checking password
      
        if(!user) return res.status(401).json({status:"failed", msg:"user is not registered"});

        //match the password with the user's password that he stored in the system
        const match = await user.checkPassword(req.body.password);
      
        if(!match) return res.status(401).json({status:"failed", msg:"wrong password"});

        //create a token and return it
        const token = getNewToken(user);
        return res.status(200).send({token,user})

    }catch(err){
        return res.status(500).json({status:"failed", msg:"something went wrong"})
    }
}

module.exports = {signIn,signUp}