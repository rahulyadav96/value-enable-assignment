
const mongoose  = require('mongoose');

const dbPassword = process.env.DB_PASSWORD;  // database password

//connect function  that connect application with database
const connect  = () =>{
    return mongoose.connect(`mongodb+srv://gravity:${dbPassword}@cluster0.i8avu.mongodb.net/gravityEducation?retryWrites=true&w=majority`)
}

module.exports = connect;