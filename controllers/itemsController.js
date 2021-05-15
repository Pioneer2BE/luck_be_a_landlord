const express = require("express")
const router = express.Router()
const itemServices = require("../services/itemsService")

//View a Single Item
router.get("/:item_name",itemServices.getSingleItem)

//Add a New Item
router.post("/items",itemServices.postSingleItem)

//Delete an Item
router.delete("/:item_name",itemServices.deleteSingleItem)

//Update an Item
router.put("/:item_id",itemServices.putSingleItem)

//View A List of Items
router.get("/",itemServices.getAllItems)


module.exports = router