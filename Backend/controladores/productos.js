import productos from "../modelos/productos.js"


const productosHttp = {

    productosPost: async (req, res) => {
    console.log(req.body);
    const {cantidad, nombregasto, administrador, finca, description,   formapago, cost_value, total  } = req.body;
    const productosAdd = new productos({ cantidad, nombregasto, administrador, finca, description,   formapago, cost_value, total  });
    await productosAdd.save();
    res.json("productos guardados");
  },


productosAllGet: async ( req, res) =>{
const productosList= await productos.find().populate("productos").populate("finca");
res.json(productosList);
},

// modificar por id

productosPutId: async (req, res) => {
const { id } = req.params;
const { cantidad, nombregasto, administrador, finca, description,   formapago, cost_value, total } = req.body;
const productosUpdate = await productos.findByIdAndUpdate(id, {
  cantidad, nombregasto, administrador, finca, description,   formapago, cost_value, total
});
await productosUpdate.save();
res.json("productos actualizados");
},


//edit state for id
productosPutestado: async (req, res) => {
const { id } = req.params;
const { estado } = req.body;
const productosUpdateestado = await productos.findByIdAndUpdate(id, {
  estado: estado,
});
await productosUpdateestado.save();
res.json("Estado actualizado");
},

};


export default productosHttp;