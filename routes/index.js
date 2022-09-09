const Router = require("express");
const route = Router();

const dataRoute = require("./data");
const lineRoute = require("./line");
const sectionRoute = require("./section");
const bagianRoute = require("./bagian");
const problemRoute = require("./problem");
const penyebabRoute = require("./penyebab");
const jenisPerbaikanRoute = require("./jenisPerbaikan");
route.use("/data", dataRoute);
route.use("/line", lineRoute);
route.use("/section", sectionRoute);
route.use("/bagian", bagianRoute);
route.use("/problem", problemRoute);
route.use("/penyebab", penyebabRoute);
route.use("/jenisPerbaikan", jenisPerbaikanRoute);

module.exports = route;
