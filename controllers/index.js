const DataController = require('./DataControllers');
const LineController = require('./LineControllers');
const SectionController = require('./SectionControllers');
const BagianController = require('./BagianControllers');
const ProblemController = require('.//ProblemControllers');
const JenisPerbaikanControllers = require('./JenisPerbaikanControllers');
const PenyebabController = require('./PenyebabControllers');
const MttrController = require('./MttrController')
const SubBagianController = require('./SubBagianControllers')
module.exports={
    MttrController, SubBagianController,
    DataController, LineController, SectionController, BagianController, ProblemController, JenisPerbaikanControllers, PenyebabController
}