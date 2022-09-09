const { jenis_perbaikan } = require("../models");

class JenisPerbaikanControllers {
  static async show(req,res){
    try {
      let result = await jenis_perbaikan.findAll()
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  static async add(req, res) {
    try {
      const {
        sectionId, Value
    } = req.body;
    let result = await jenis_perbaikan.create({
          sectionId, Value
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  
}
module.exports = JenisPerbaikanControllers;
