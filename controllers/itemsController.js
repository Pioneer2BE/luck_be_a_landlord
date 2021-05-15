const express = require('express')
const router = express.Router()

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

//View a Single Item
router.get("/:item_name",(req,res)=>{

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

//Add a New Item
router.post("/items",(req,res)=>{

    res.json(
        {
            message:"Post request to add an item is working."
        }
    )
    
})

//Delete an Item
router.delete("/:item_name",(req,res)=>{

    res.json(
        {
            message:"Delete request to delete an item is working."
        }
    )
    
})
//Update an Item
router.put("/:item_id",(req,res)=>{

    res.json(
        {
            message:"Put request to update an item is working."
        }
    )
    
})

//View A List of Items
router.get("/",(req,res)=>{

    res.json(
        {
            data:fakeDB
        }
    )
    
})


module.exports = router