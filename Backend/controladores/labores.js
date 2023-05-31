import modelosLabores from "../modelos/labores.js";

const laboreshttp= {

  laboresgetListar:async(req,res) => {
      const labores= await modelosLabores.find() 
      res.json({lotes: labores})
  },

  laboresGet : async (req, res) => {
    const { nombre_labor, area_realizar, pago_diario} = req.params;
    const labores = await modelosLabores.findById(
        nombre_labor, area_realizar, pago_diario
    );
    res.json({
      labores,
    });
  },

  laboresPost : async (req, res) => {
    const { nombre_labor, area_realizar, pago_diario } = req.body;
    const labores = new modelosLabores({
      nombre_labor, area_realizar, pago_diario
    });
    await labores.save();
    res.json({
      msg: "Labor registrada",
    });
  },

  laboresGetBuscar : async (req, res) => {
    const { nombre_labor, area_realizar, pago_diario } = req.query;
    const labores = await modelosLabores.find({
      nombre_labor, area_realizar, pago_diario
    });
    res.json({
      labores,
    });
  },
  
  laboresDelete : async (req, res) => {
    const { nombre_labor, area_realizar, pago_diario } = req.query;
    const labores = await modelosLabores.findOneAndDelete({
      nombre_labor, area_realizar, pago_diario
    });
    res.json({ "Labor eliminada": labores });
  }
}

export default laboreshttp