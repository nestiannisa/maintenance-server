const Router = require("express");
const lineRoute = Router();
const { LineController} = require("../controllers");

lineRoute.get('/show', LineController.showLine)
lineRoute.post("/add", LineController.addLine)
module.exports = lineRoute;
