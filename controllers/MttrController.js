const { data } = require("../models");

class MttrController {
    static async housing(req,res){
      try {
        const val="Housing"
        let result = await data.findAll({
            where:{Bagian:val}
        })
        const jumlah=result.length
        res.status(200).json(jumlah);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    
    static async mttrHousing(req,res){
      try {
        const val="Housing"
        let result = await data.findAll({
            where:{Bagian:val},
         order: [["Bagian", "ASC"]],

        })
        const housing = result
  
        const row = [];
        housing.filter(function(item){
            const i = row.findIndex(x => (x.Durasi == item.Durasi ));
            if(i <= -1){
                row.push(item.Durasi);
            }
            return null;
        });
        let total=0;
        //  let uniqueRow = [...new Set(row)]
        for(let i = 0; i < row.length; i++){
            total += row[i]
        }
        res.status(200).json(total);
        
        // res.status(200).json(jumlah);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    
    static async leadsheet(req,res){
      try {
        const val="Leadsheet"
        let result = await data.findAll({
            where:{Bagian:val}
        })
        const jumlah=result.length
        res.status(200).json(jumlah);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    
    static async bolaCeramic(req,res){
      try {
        const val="Bola Ceramic"
        let result = await data.findAll({
            where:{Bagian:val}
        })
        const jumlah=result.length
        res.status(200).json(jumlah);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    
    static async lower(req,res){
      try {
        const val="Lower"
        let result = await data.findAll({
            where:{Bagian:val}
        })
        const jumlah=result.length
        res.status(200).json(jumlah);
      } catch (error) {
        res.status(500).json(error);
      }
    }

  
    
  }
  module.exports = MttrController;