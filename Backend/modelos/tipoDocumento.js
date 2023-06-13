import mongoose from "mongoose";

const tipoDocumentoShechema= new mongoose.Schema({
    nombreT:{type:String, required:true},
    siglas:{type:String, required:true},
    estado: { type: Number, default: 1 },
})


const modelostipoDocumento = mongoose.model("tipoDocumento", tipoDocumentoShechema);

export default modelostipoDocumento;