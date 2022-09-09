const Router = require("express");
const problemRoute = Router();
const { ProblemController} = require("../controllers");

problemRoute.get('/show', ProblemController.show)
problemRoute.post("/add", ProblemController.add)
module.exports = problemRoute;
