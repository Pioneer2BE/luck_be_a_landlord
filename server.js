const express = require("express");
require("dotenv").config({path: "config/keys.env"});
itemController = require("./controllers/itemsController.js")

const app = express();

app.use(express.json());
//parses incoming http request into JSON format

app.use("/items",itemController);
//imports the controller file created

app.listen(process.env.PORT,()=>{

    console.log(`Web Server is up and running on port ${process.env.PORT}`)

})