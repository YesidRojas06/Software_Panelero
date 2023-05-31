import monngoose from "mongoose";

const pagosShechema= new monngoose.Schema({
    tipo_pago:{type:String, required:true}
})

export default monngoose.model("pagos", pagosShechema)