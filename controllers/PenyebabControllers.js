const { penyebab } = require("../models");

class PenyebabController {
  static async show(req,res){
    try {
      let result = await penyebab.findAll()
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  static async add(req, res) {
    try {
      const {
        subBagianId, Value_Penyebab
    } = req.body;
    let result = await penyebab.create({
          subBagianId, Value_Penyebab
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { subBagianId, Value_Penyebab } = req.body;
      let result = await penyebab.update(
        {
          subBagianId, Value_Penyebab
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
module.exports = PenyebabController;
