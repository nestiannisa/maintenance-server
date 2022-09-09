const Router = require("express");
const sectionRoute = Router();
const { SectionController} = require("../controllers");

sectionRoute.get('/show', SectionController.showSection)
sectionRoute.post("/add", SectionController.addSection)
module.exports = sectionRoute;
