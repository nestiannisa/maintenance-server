const Router = require("express");
const mttrRoute = Router();
const { MttrController} = require("../controllers");
const upload = require('../middleware/upload');

mttrRoute.get('/housing', MttrController.housing)
mttrRoute.get('/leadsheet', MttrController.leadsheet)
mttrRoute.get('/bolaCeramic', MttrController.bolaCeramic)
mttrRoute.get('/lower', MttrController.lower)
mttrRoute.get('/mttrHousing', MttrController.mttrHousing)
module.exports = mttrRoute;
