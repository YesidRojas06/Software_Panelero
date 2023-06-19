import gastosmensuales from "../modelos/gastosmensuales.js"
//import bcryptjs from "bcryptjs";

const gastosmensualesHttp = {

    gastosmensualesPost: async (req, res) => {
    console.log(req.body);
    const { nombregasto, finca, descripcion,  metododepago, costValue, Total } = req.body;
    const gastosmensualesAdd = new gastosmensuales({ nombregasto, finca, descripcion,  metododepago, costValue, Total });
    await gastosmensualesAdd.save();
    console.log("3crea");
    res.json("guardar gastos mensuales");
  },


// listar todos los gastos

gastosmensualesAllGet: async ( req, res) =>{
const gastosmensuales= await gastosmensuales.find().populate("metododepago").populate("finca");
res.json(gastosmensuales);
},

// modificar por id

gastosmensualesPutId: async (req, res) => {
const { id } = req.params;
const { nombregasto, finca, descripcion,  metododepago, costValue, Total  } = req.body;
const gastosmensualesUpdate = await gastosmensuales.findByIdAndUpdate(id, {
  nombregasto, finca, descripcion, metododepago, costValue, Total
});
await gastosmensualesUpdate.save();
res.json("gastos mensuales actualizados");
},


//edit state for id
gastosmensualesPutestado: async (req, res) => {
const { id } = req.params;
const { estado } = req.body;
const gastosmensualesestado = await gastosmensuales.findByIdAndUpdate(id, {
  estado: estado,
});
await gastosmensualesestado.save();
res.json("Estado actualizado");
},

};




export default gastosmensualesHttp;