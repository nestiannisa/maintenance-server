const { problem, section } = require("../models");

class ProblemController {
  static async show(req,res){
    try {
      let result = await problem.findAll({
        include:[section]
      })
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  static async add(req, res) {
    try {
      const {
        sectionId, bagianId, Value
    } = req.body;
    let result = await problem.create({
          sectionId, bagianId, Value
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  
}
module.exports = ProblemController;
