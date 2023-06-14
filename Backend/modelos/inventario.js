import mongoose from "mongoose";

const InventarioSchema = new mongoose.Schema({
  codigo: { type: String, maxlength: 25, required: true },
  nombreAr: { type: String, maxlength: 25, required: true },
  cantidad: { type: String },
  N_entradas: { type: String, maxlength: 50 },
  N_salidas: { type: String, maxlength: 50 },
  precio: { type: String, maxlength: 50 },
});




const modeloinventario = mongoose.model("Inventario", InventarioSchema);

export default modeloinventario;