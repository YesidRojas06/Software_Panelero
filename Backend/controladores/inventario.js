import modelosInventario from "../modelos/inventario.js";

const inventariohttp= {

  inventariogetListar:async(req,res) => {
      const inventario= await modelosInventario.find() 
      res.json({inventario: inventario})
  },

  inventarioIdGet : async (req, res) => {
    const { codigo, nombreAr, cantidad, n_entradas, n_salidas, precio } = req.params;
    const inventario = await modelosInventario.find();
    res.json({
      inventario,
    });
  },

  inventarioPost : async (req, res) => {
    const { codigo, nombreAr, cantidad, n_entradas, n_salidas, precio } = req.body;
    const inventario = new modelosInventario({
      codigo, nombreAr, cantidad, n_entradas, n_salidas, precio,
    });
    await inventario.save();
    res.json({
      inventario,
    });
  },

  inventarioput: async (req, res) => {
    const { codigo, nombreAr, cantidad, n_entradas,
      n_salidas, precio,} = req.body;

    console.log(req.body);
    const { id } = req.params;
    const inventario = await modelosInventario.findByIdAndUpdate(id, {
      codigo, nombreAr, cantidad, n_entradas,
      n_salidas, precio,
    });
    await inventario.save();
    res.send(inventario);
  },



  inventarioGetBuscar : async (req, res) => {
    const { codigo, nombreAr, cantidad, n_entradas, n_salidas, precio } = req.query;
    const inventario = await modelosInventario.find({
      codigo, nombreAr, cantidad, n_entradas, n_salidas, precio,
    });
    res.json({
      inventario,
    });
  },






  
  inventarioDelete : async (req, res) => {
    const { codigo, nombreAr, cantidad, n_entradas, n_salidas, precio } = req.query;
    const inventario = await modelosInventario.findOneAndDelete({
      codigo, nombreAr, cantidad, n_entradas, n_salidas, precio,
    });
    res.json({ "Inventario eliminado": inventario });
  },




  inventarioInactivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const inventario = await modelosInventario.findByIdAndUpdate(id, { estado: 0 });
    res.send(inventario);
  },

  inventarioActivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const inventario = await modelosInventario.findByIdAndUpdate(id, { estado: 1 });
    res.send(inventario);
  },
}

export default inventariohttp