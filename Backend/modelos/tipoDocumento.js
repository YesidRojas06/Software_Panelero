import monngoose from "mongoose";

const tipoDocumentoShechema= new monngoose.Schema({
    nombreT:{type:String, required:true},
    siglas:{type:String, required:true}
})

export default monngoose.model("tipoDocumento", tipoDocumentoShechema)