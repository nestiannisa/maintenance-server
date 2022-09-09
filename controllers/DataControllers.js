const { data } = require("../models");

class DataController {
  static async showData(req,res){
    try {
      let result = await data.findAll()
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  static async addData(req, res) {
    try {
      const {
        Section,
        No_Mesin,
        Nama_Mesin,
        Tindakan_Perbaikan,
        Catatan,
        Gejala_Kerusakan,
        Bagian,
        Problem,
        Penyebab,
        Jenis_Perbaikan,
        category,
        part,
        Durasi,
        S,
        F,
        Running_Hours,
    } = req.body;
    let result = await data.create({
          Section,
          No_Mesin,
          Nama_Mesin,
          Tindakan_Perbaikan,
          Catatan,
          Gejala_Kerusakan,
          Bagian,
          Problem,
          Penyebab,
          Jenis_Perbaikan,
          category,
          part,
          Durasi,
          S,
          F,
          Running_Hours
      });

      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detailById(req,res) {
    try {
      const id = +req.params.id
      let result = await data.findAll({
        where: {
          id:id
        }
      })
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json(error)
    }

  }

  static async updateData(req,res) {
    try {
      const id =+req.params.id;
      const {
        // Section,
        No_Mesin,
        Nama_Mesin,
        Tindakan_Perbaikan,
        Catatan,
        Gejala_Kerusakan,
        Bagian,
        Problem,
        Penyebab,
        Jenis_Perbaikan,
        category,
        part,
        Durasi,
        S,
        F,
        Running_Hours,
    } = req.body;
      let result = await data.update({ 
        // Section,
        No_Mesin,
        Nama_Mesin,
        Tindakan_Perbaikan,
        Catatan,
        Gejala_Kerusakan,
        Bagian,
        Problem,
        Penyebab,
        Jenis_Perbaikan,
        category,
        part,
        Durasi,
        S:new Date(),
        F:new Date(),
        Running_Hours}, {where:{id}})
      result[0] === 1
        ? res.status(200).json({
            message: `${id} has been updated!`,
          })
        : res.status(404)({
            message: `${id} has been not updated!`,
          });
    } catch (error) {
      res.status(500).json(err);
      
    }
  }
}
module.exports = DataController;
