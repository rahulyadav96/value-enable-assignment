const User = require('../models/user.model');
const express = require("express");
const router = express.Router();

//get all users
router.get("/", async(req,res)=>{
    try{
        const users = await User.find().select('-password').lean().exec();
        return res.status(200).json({users:users})
    }catch(err){
        return res.status(500).json({status:"failed", msg:"something went wrong"})
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete({_id:req.params.id});
        return res.status(200).send({user})
    }catch(err){
        return res.status(500).send({msg:"somthing went wrong"})
    }
})

module.exports = router;