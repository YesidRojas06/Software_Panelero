import modeloproductos from "../modelos/productos.js";
import productos from "../modelos/productos.js"


const productosHttp = {

  productosGet: async (req, res) => {
    const productos = await modeloproductos.find();
    res.json({
      productos
    });
  },

  productosPost:async (req, res) => {
    const { cantidad, nombregasto,administrador, 
      finca, descripcion, formapago, cost_value, total, fecha  } = req.body;
    const productos = new modeloproductos({ 
      cantidad, nombregasto,administrador,
       finca, descripcion, formapago, cost_value, total, fecha
    });
  
    await productos.save();
    res.json({
      productos,
    });
  },

  productosSearchForTextGet:async (req, res) => {
    const { cantidad, nombregasto,administrador, 
      finca, descripcion, formapago, cost_value, total, fecha } = req.query;
    const productos = await modeloproductos.find({ cantidad, nombregasto,administrador, 
      finca, descripcion, formapago, cost_value, total, fecha });
    res.json({
      productos,
    });
  },
  
  productosput: async (req, res) => {
    const {  cantidad, nombregasto,administrador, 
      finca, descripcion, formapago, cost_value, total, fecha } = req.body;

    console.log(req.body);
    const { id } = req.params;
    const productos = await modeloproductos.findByIdAndUpdate(id, {
      cantidad, nombregasto,administrador, 
      finca, descripcion, formapago, cost_value, total, fecha
    });
    await productos.save();
    res.send(productos);
  },

  productosInactivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const productos = await modeloproductos.findByIdAndUpdate(id, { estado: 0 });
    res.send(productos);
  },

  productosActivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const productos = await modeloproductos.findByIdAndUpdate(id, { estado: 1 });
    res.send(productos);
  },

};


export default productosHttp;