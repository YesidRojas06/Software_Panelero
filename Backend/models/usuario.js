import moongose from "mongoose";

const UsuarioSchema= new moongose.Schema({
    nombre:{type:String, maxlength:30,required:true},
    fecha_nacimiento:{type:Date, required:true},
    documento:{type:String, length: 12, required:true},
    apellido:{type:String,maxlength:30, required:true},
    email:{type:String, required:true, minlength:8},
    telefono:{type:String, maxlength:10},
    password:{type:String, required:true, minlength:8},
})

export default moongose.model("Usuario", UsuarioSchema)