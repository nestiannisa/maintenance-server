const { line } = require("../models");

class LineController {
  static async showLine(req,res){
    try {
      let result = await line.findAll()
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  static async addLine(req, res) {
    try {
      const {
        Name, Value
    } = req.body;
    let result = await line.create({
          Name, Value
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  
}
module.exports = LineController;
