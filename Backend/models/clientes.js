import moongose from "mongoose";

const ClientesSchema= new moongose.Schema({
    nombre:{type:String, maxlength:30,required:true},
    documento:{type:String, length: 12, required:true},
    apellido:{type:String,maxlength:30, required:true},
    telefono:{type:String, maxlength:10},
    direccion:{type:String, type:Number, required:true},
})

export default moongose.model("Cliente", ClientesSchema)