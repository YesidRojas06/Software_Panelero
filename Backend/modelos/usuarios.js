import mongoose from "mongoose";

const schema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, unique: true, required: true },
  contrasena: { type: String, required: true },
  rol: { type: String, required: true },
  estado: { type: Number, default: 1 },
});

const modelousuario = mongoose.model("usuario", schema);

export default modelousuario;
