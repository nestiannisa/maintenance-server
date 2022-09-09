const Router = require("express");
const bagianRoute = Router();
const { BagianController} = require("../controllers");
const upload = require('../middleware/upload');

bagianRoute.post("/add",upload.single('Image'), BagianController.add)
bagianRoute.get('/show', BagianController.show)
bagianRoute.put("/update/:id", BagianController.update)
module.exports = bagianRoute;
