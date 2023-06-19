import marcas from "../modelos/marcas.js"


const marcasHttp = {


    marcasPost: async (req, res) => {
    console.log(req.body);
    const { nombremarcas, descripcion, creador  } = req.body;
    const marcasAdd = new marcas({ nombremarcas, descripcion, creador });
    await marcasAdd.save();
    res.json("guardar marcas");
  },



marcasAllGet: async ( req, res) =>{
const marcasList= await brands.find();
res.json(marcasList);
},


marcasPutId: async (req, res) => {
const { id } = req.params;
const { nombremarcas, descripcion, creador  } = req.body;
const marcasUpdate = await marcas.findByIdAndUpdate(id, {
  nombremarcas, descripcion, creador
});
await marcasUpdate.save();
res.json("marcas actualizada");
},



marcasPutestado: async (req, res) => {
const { id } = req.params;
const { estado } = req.body;
const marcasUpestado = await marcas.findByIdAndUpdate(id, {
  estado: estado,
});
await marcasUpestado.save();
res.json("Estado actualizado");
},

};


export default marcasHttp;