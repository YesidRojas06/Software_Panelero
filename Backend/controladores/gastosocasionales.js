import gastosocasionales from "../modelos/gastosocasionales.js"


const gastosocasionalesHttp = {

  gastosocasionalesPost: async (req, res) => {
    console.log(req.body);
    const { nombregasto, finca, descripcion,  metododepago, costValue, Total } = req.body;
    const gastosocasionalesAdd = new gastosocasionales({ nombregasto, finca, Total, descripcion, metododepago, costValue });
    await gastosocasionalesAdd.save();
    res.json("gastos ocasionales guardados");
    //console.log("oka");
  },



// listar todo

gastosocasionalesGet: async ( req, res) =>{
const gastosocasionales= await gastosocasionales.find().populate("PAYMENT_METHOD").populate("Finca");
res.json(gastosocasionales);
},

// modificar por id

gastosocasionalesPutId: async (req, res) => {
const { id } = req.params;
const {nombregasto, finca, descripcion,  metododepago, costValue, Total } = req.body;
const gastosocasionalesUpdate = await gastosocasionales.findByIdAndUpdate(id, {
  nombregasto, finca, descripcion,  metododepago, costValue, Total
});
await gastosocasionalesUpdate.save();
res.json("gastos ocasionales actualizados");
},





gastosocasionalesPutestado: async (req, res) => {
const { id } = req.params;
const { estado } = req.body;
const gastosocasionalesestado = await gastosocasionales.findByIdAndUpdate(id, {
  estado: estado,
});
await gastosocasionalesestado.save();
res.json("Estado actualizado");
},
}

export default gastosocasionalesHttp;