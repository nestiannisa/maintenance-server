const Router = require("express");
const subBagianRoute = Router();
const { SubBagianController} = require("../controllers");
const upload = require('../middleware/upload');

subBagianRoute.post("/add",upload.single('Image'), SubBagianController.add)
subBagianRoute.get('/show', SubBagianController.show)
subBagianRoute.put("/update/:id", SubBagianController.update)
module.exports = subBagianRoute;
