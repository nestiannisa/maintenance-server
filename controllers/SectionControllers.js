const { section } = require("../models");

class SectionController {
  static async showSection(req,res){
    try {
      let result = await section.findAll()
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  static async addSection(req, res) {
    try {
      const {
        nama, value, index
    } = req.body;
    let result = await section.create({
          nama, value, index
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  
}
module.exports = SectionController;
