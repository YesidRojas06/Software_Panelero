import modelomarcas from "../modelos/marcas.js";
// import marcas from "../modelos/marcas.js"


const marcasHttp = {

  marcasGet: async (req, res) => {
    const marcas = await modelomarcas.find();
    res.json({
      marcas
    });
  },


    marcasPost: async (req, res) => {
    const { nombremarcas, descripcion, creador, fecha  } = req.body;
    const marcas = new modelomarcas({ 
      nombremarcas, descripcion, creador, fecha
    });
    await marcas.save();
    res.json({
      marcas,
    });
  },

  marcasSearchForTextGet:async (req, res) => {
    const {  nombremarcas, descripcion, creador, fecha } = req.query;
    const marcas = await modelomarcas.find({ 
      nombremarcas, descripcion, creador, fecha });
    res.json({
      marcas,
    });
  },

// marcasAllGet: async ( req, res) =>{
// const marcasList= await brands.find();
// res.json(marcasList);
// },


marcasPutId: async (req, res) => {
const { id } = req.params;
const { nombremarcas, descripcion, creador  } = req.body;
const marcasUpdate = await marcas.findByIdAndUpdate(id, {
  nombremarcas, descripcion, creador
});
await marcasUpdate.save();
res.json("marcas actualizada");
},

marcasput: async (req, res) => {
  const { nombremarcas, descripcion, creador, fecha} = req.body;

  console.log(req.body);
  const { id } = req.params;
  const marcas = await modelomarcas.findByIdAndUpdate(id, {
    nombremarcas, descripcion, creador, fecha
    
  });
  await marcas.save();
  res.send(marcas);
},

marcasInactivoput: async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const marcas = await modelomarcas.findByIdAndUpdate(id, { estado: 0 });
  res.send(marcas);
},

marcasActivoput: async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const marcas = await modelomarcas.findByIdAndUpdate(id, { estado: 1 });
  res.send(marcas);
},


// marcasPutestado: async (req, res) => {
// const { id } = req.params;
// const { estado } = req.body;
// const marcasUpestado = await marcas.findByIdAndUpdate(id, {
//   estado: estado,
// });
// await marcasUpestado.save();
// res.json("Estado actualizado");
// },

};


export default marcasHttp;