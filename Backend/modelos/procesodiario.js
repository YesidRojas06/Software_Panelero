import mongoose from "mongoose";

const procesodiario = new mongoose.Schema({
  nombre: { type: String, require: true },
  descripcion: { type: String },
  horas: { type: Number, require: true },
  usuario: {type: mongoose.Schema.Types.ObjectId,ref: "usuarios",    require: true },
  lote: { type:mongoose.Schema.Types.ObjectId,ref: "lotes",    require: true },
  finca: { type:mongoose.Schema.Types.ObjectId,ref: "Farm",    require: true },
  fecha: { type: Date, require: true },
  estado: { type: Number, default: 1 },
});

export default mongoose.model("procesodiario", procesodiario);
