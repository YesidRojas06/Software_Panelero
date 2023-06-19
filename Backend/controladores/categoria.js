import categoria from "../modelos/categoria.js"


const categoriaHttp = {

    categoriaPost: async (req, res) => {
    console.log(req.body);
    const { nombrecategoria, descripcion } = req.body;
    const categoriaAdd = new categoria({ nombrecategoria, descripcion});
    await categoriaAdd.save();
    res.json("categoria guardada");
  },



categoriaAllGet: async ( req, res) =>{
const categoriaList= await categoria.find();
res.json(categoriaList);
},


categoriaPutId: async (req, res) => {
const { id } = req.params;
const { nombrecategoria, descripcion  } = req.body;
const categoriaUpdate = await categoria.findByIdAndUpdate(id, {
  nombrecategoria, descripcion
});
await categoriaUpdate.save();
res.json("categoria actualizada");
},



categoriaPutestado: async (req, res) => {
const { id } = req.params;
const { estado } = req.body;
const categoriaUpestado = await categoria.findByIdAndUpdate(id, {
  estado: estado,
});
await categoriaUpestado.save();
res.json("Estado actualizado");
},

};


export default categoriaHttp;