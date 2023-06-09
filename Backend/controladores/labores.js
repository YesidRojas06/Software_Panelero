import modelosLabores from "../modelos/labores.js";

const laboreshttp= {

  // laboresgetListar:async(req,res) => {
  //    const labores= await modelosLabores.find() 
  //     res.json({lotes: labores})
  // },

  laboresGet : async (req, res) => {
  
    const labores = await modelosLabores.find();
    res.json({
      labores,
    });
  },

  laboresPost:async (req, res) => {
    const { nombre_labor, area_realizar, pago_diario } = req.body;
    const labores = new modelosLabores({ 
      nombre_labor, 
      area_realizar, 
      pago_diario
    });
  
    await labores.save();
    res.json({
      labores,
    });
  },

  laboresSearchForTextGet:async (req, res) => {
    const { nombre_labor, area_realizar, pago_diario} = req.query;
    const labores = await modelosLabores.find({ 
      nombre_labor, 
      area_realizar, 
      pago_diario });
    res.json({
      labores,
    });
  },



  // laboresPost : async (req, res) => {
  //   const { nombre_labor, area_realizar, pago_diario } = req.body;
  //   const labores = new modelosLabores({
  //     nombre_labor, 
  //     area_realizar,
  //     pago_diario
  //   });
  //   await labores.save();
  //   res.json({
  //     msg: "Labor registrada",
      
  //   });
 



  laboresput: async (req, res) => {
    const {  nombre_labor, area_realizar, pago_diario } = req.body;

    console.log(req.body);
    const { id } = req.params;
    const labores = await modelosLabores.findByIdAndUpdate(id, {
      nombre_labor, 
      area_realizar,
      pago_diario
      
    });
    await labores.save();
    res.send(labores);
  },

  
  laboresGetBuscar : async (req, res) => {
    const { nombre_labor, area_realizar, pago_diario } = req.query;
    const labores = await modelosLabores.find({
      nombre_labor, 
      area_realizar, 
      pago_diario
    });
    res.json({
      labores
    });
  },
  
  laboresDelete : async (req, res) => {
    const { nombre_labor, area_realizar, pago_diario } = req.query;
    const labores = await modelosLabores.findOneAndDelete({
      nombre_labor,
       area_realizar, 
       pago_diario
    });
    res.json({ "Labor eliminada": labores });
  },

  laboresInactivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const labores = await modelosLabores.findByIdAndUpdate(id, { estado: 0 });
    res.send(labores);
  },

  laboresActivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const labores = await modelosLabores.findByIdAndUpdate(id, { estado: 1 });
    res.send(labores);
  },
}

export default laboreshttp