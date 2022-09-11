const { subBagian,bagian } = require("../models");

class SubBagianController {
  static async show(req,res){
    try {
      let result = await subBagian.findAll({
        include:[bagian]
      })
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  static async add(req, res) {
    try {
      let Image = req.file.path;

      const {
        bagianId, Value
    } = req.body;
    
    let result = await subBagian.create({
          bagianId, Value, Image
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { bagianId, Value } = req.body;
      let result = await subBagian.update(
        {
          bagianId, Value
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
module.exports = SubBagianController;
