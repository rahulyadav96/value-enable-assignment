const app = require('./index'); 
const connect = require('./config/db');


//port number
const PORT = process.env.PORT || 3001



//listen server on port number
app.listen(PORT, async()=>{

    //stable the connection between app and database
  await connect();

  console.log(`server listening on ${PORT}`);
})

