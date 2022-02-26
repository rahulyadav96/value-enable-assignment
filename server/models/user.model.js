const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

//create a user schema
const userSchema = new mongoose.Schema({

    fullName:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, minlength:8},
    role:{type:String, required:true, default:"customer"}

},{
    timestamps:true,
    versionKey:false
});


//method for hash the password before saving the user-data in database for security purpose
userSchema.pre('save',function(next){

    //check if password is modified or not
    //if not then return with next
    if(!this.isModified('password')) return next();


    //if yes then hash the password
    bcrypt.hash(this.password,8,(err,hash)=>{

        //if error then return next with error
        if(err) return next(err);

        //update the password with hashed one
        this.password = hash

        //return next
        next();
    })
})

//method for verify the password 
// It comapres the entered password with user password shaved in database 

userSchema.methods.checkPassword = function(password){

    //get the saved hashed password from database
    const hashedPassword = this.password;

    return new Promise((resolve,reject)=>{

        bcrypt.compare(password,hashedPassword, (err,matched)=>{
              //if err then reject the promise
              if(err) reject(err)

              //else resolve promise
              resolve(matched)


            })
    })

}

//export the user model
module.exports = mongoose.model('user',userSchema);

