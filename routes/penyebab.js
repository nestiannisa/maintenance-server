const Router = require("express");
const penyebabRoute = Router();
const { PenyebabController} = require("../controllers");

penyebabRoute.get('/show', PenyebabController.show)
penyebabRoute.post("/add", PenyebabController.add)
penyebabRoute.put("/update/:id", PenyebabController.update)
module.exports = penyebabRoute;
