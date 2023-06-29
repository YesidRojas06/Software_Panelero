import modelocategoria from "../modelos/categoria.js"


const categoriaHttp = {


  categoriaGet: async (req, res) => {
    const categoria = await modelocategoria.find();
    res.json({
      categoria
    });
  },


  categoriaPost:async (req, res) => {
    const { nombrecategoria, descripcion, fecha } = req.body;
    const categoria = new modelocategoria({ 
      nombrecategoria, descripcion, fecha
    });
  
    await categoria.save();
    res.json({
      categoria,
    });
  },

  categoriaSearchForTextGet:async (req, res) => {
    const { nombrecategoria, descripcion, fecha } = req.query;
    const categoria = await modelocategoria.find({ nombrecategoria, descripcion, fecha  });
    res.json({
      categoria,
    });
  },
  
  categoriaput: async (req, res) => {
    const { nombrecategoria, descripcion, fecha} = req.body;

    console.log(req.body);
    const { id } = req.params;
    const categoria = await modelocategoria.findByIdAndUpdate(id, {
      nombrecategoria, descripcion, fecha
      
    });
    await categoria.save();
    res.send(categoria);
  },

  categoriaInactivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const categoria = await modelocategoria.findByIdAndUpdate(id, { estado: 0 });
    res.send(categoria);
  },

  categoriaActivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const categoria = await modelocategoria.findByIdAndUpdate(id, { estado: 1 });
    res.send(categoria);
  },
};


export default categoriaHttp;



// categoriaAllGet: async ( req, res) =>{
// const categoriaList= await categoria.find();
// res.json(categoriaList);
// },


// categoriaPutId: async (req, res) => {
// const { id } = req.params;
// const { nombrecategoria, descripcion  } = req.body;
// const categoriaUpdate = await categoria.findByIdAndUpdate(id, {
//   nombrecategoria, descripcion
// });
// await categoriaUpdate.save();
// res.json("categoria actualizada");
// },



// categoriaPutestado: async (req, res) => {
// const { id } = req.params;
// const { estado } = req.body;
// const categoriaUpestado = await categoria.findByIdAndUpdate(id, {
//   estado: estado,
// });
// await categoriaUpestado.save();
// res.json("Estado actualizado");
// },
