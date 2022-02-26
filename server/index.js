const express = require('express');
const cors = require("cors");
const path = require('path')
require('dotenv').config(); // for reading env file

//get controller
const {signIn, signUp} = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//port number
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors({origin:`http://localhost:${PORT}`,credentials:true}));


//routes
app.get("/api",(req,res)=>{
    return res.json({message:"hello from sever"})
})

app.use('/signup',signUp);
app.use('/login', signIn);
app.use('/users',userController)


module.exports = app;
