const express = require("express");
require("dotenv").config({path: "config/keys.env"});

const app = express();

app.use(express.json());
//parses incoming http request into JSON format

const fakeDB = [
    
    {
        name:"Shiny Pebble",
        rarity:"common",
        description:"You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
        goldPerTurn:0
    },

    {
        name:"Shiny peach",
        rarity:"common",
        description:"You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
        goldPerTurn:0
    },

    {
        name:"Shiny pumpkin",
        rarity:"common",
        description:"You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
        goldPerTurn:0
    }

]

app.get("/",(req,res)=>{

    res.send("Testing")
    
})

//View A List of Items
app.get("/items",(req,res)=>{

    res.json(
        {
            data:fakeDB
        }
    )
    
})
//Add a New Item
app.put("/:items",(req,res)=>{

    res.send("Testing")
    
})
//View a Single Item
app.get("/:item_name",(req,res)=>{

    const name = req.params.item_name;
    

    const itemFound = fakeDB.find(item=>item.name === name);
    
    if(itemFound != undefined)
    {
        res.json({
            message: `Details of product with the id ${itemFound.name}}`,
            data: itemFound
        })
    }

    else
    {
        res.status(404).json({
            message : `Product with id ${name} was not found`
        })
    }
    
})
//Delete an Item
app.delete("/:item_name",(req,res)=>{

    res.send("Testing")
    
})
//Update an Item
app.put("/:item_id",(req,res)=>{

    res.send("Testing")
    
})

app.listen(process.env.PORT,()=>{

    console.log(`Web Server is up and running on port ${process.env.PORT}`)

})