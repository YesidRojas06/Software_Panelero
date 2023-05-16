import mongoose from "mongoose";

const schema = new mongoose.Schema
({nombre_eps: {type: String, required: true},
    seccional: {type: String, required: true},
    linea_atencion:{type: Number, required: true},

})

const modeloeps=mongoose.model("usuario", schema)

export default modeloeps