const { problem, section, subBagian } = require("../models");

class ProblemController {
  static async show(req,res){
    try {
      let result = await problem.findAll(
        {
          include:[subBagian]
        }
      )
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  static async add(req, res) {
    try {
      const {
         subBagianId, Value
    } = req.body;
    let result = await problem.create({
           subBagianId, Value
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  
}
module.exports = ProblemController;
