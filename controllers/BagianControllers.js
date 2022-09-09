const { bagian } = require("../models");

class BagianController {
  static async show(req,res){
    try {
      let result = await bagian.findAll()
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  static async add(req, res) {
    try {
      let Image = req.file.path;

      const {
        sectionId, Value
    } = req.body;
    
    let result = await bagian.create({
          sectionId, Value, Image
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { sectionId, Value } = req.body;
      let result = await bagian.update(
        {
          sectionId, Value
        },
        {
          where: { id },
        }
      );
      result[0] === 1
        ? res.status(200).json({
            message: `${id} has been updated!`,
          })
        : res.status(404)({
            message: `${id} has been not updated!`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
}
module.exports = BagianController;
