const Router = require("express");
const dataRoute = Router();
const { DataController} = require("../controllers/");

dataRoute.get('/show', DataController.showData)
dataRoute.post("/add", DataController.addData)
dataRoute.get('/:id', DataController.detailById)
dataRoute.put('/update/:id', DataController.updateData)
module.exports = dataRoute;
