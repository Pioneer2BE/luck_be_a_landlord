const express = require("express");
require("dotenv").config({path: "config/keys.env"});

const app = express();

app.use(express.json());
//parses incoming http request into JSON format

app.get("/",(req,res)=>{

    res.send("Testing")
    
})

app.listen(process.env.PORT,()=>{

    console.log(`Web Server is up and running on port ${process.env.PORT}`)

})