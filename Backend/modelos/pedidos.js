import mongoose from "mongoose";

const pedidosSchema = new mongoose.Schema(
  {
    Documento: { type: String, required: true, unique: true },
    Telefono: { type: String, required: true },
    Nombre: { type: String, required: true },
    Direccion: { type: String, required: true },
    ComprobantePago: { type: String, required: true },
    SaldoPendiente: { type: String },
    TipoPanela: { type: String, required: true },
    FormaPanela: { type: String, required: true },
    Cantidad: { type: String, required: true },
    TipoEmpaque: { type: String, required: true },
    Abono: { type: String, required: true },
    ValorTotal: { type: String, required: true },
    Fecha: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 },
  },
);

const pedidos = mongoose.model("pedidos", pedidosSchema);

export default pedidos;
