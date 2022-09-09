const Router = require("express");
const jenisPerbaikanRoute = Router();
const { JenisPerbaikanControllers} = require("../controllers");

jenisPerbaikanRoute.get('/show', JenisPerbaikanControllers.show)
jenisPerbaikanRoute.post("/add", JenisPerbaikanControllers.add)
module.exports = jenisPerbaikanRoute;
