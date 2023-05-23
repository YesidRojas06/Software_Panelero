import mongoose from "mongoose";

const schema = new mongoose.Schema
({nombre_eps: {type: String, required: true},
    seccional: {type: String, required: true},
    linea_atencion:{type: String, required: true},
    estado: {type: Number, required: true, default: 1},   
})

const modeloeps=mongoose.model("modeloeps", schema)

export default modeloeps