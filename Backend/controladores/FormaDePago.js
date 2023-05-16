import modeloFormaPago from "../modelos/Labores.js";
import jwt from 'jsonwebtoken';

import bcrypt from "bcrypt";
import modeloFormaPago from "../modelos/Labores.js";


const FormaPagohttp= {
   FormaPagoget:async(req,res) => {
        const FormaPago= await modeloFormaPago.find() 
        res.json({FormaDePago:FormaPago})
    },
    FormaPago:async(req,res) => {

        let { pago, acciones,  estado }= req.body

        bcrypt.hash(contrasena, 10, async function(err, hash) {
            contrasena = hash;
            console.log(contrasena)

            const formaDePago = new modeloFormaPago({pago, acciones, estado}); 
            await formaDePago.save()
            res.send("usuario creado")
        });
       
    },
    FormaPago:async(req,res) => { 
        const{ pago,  acciones, estado  } = req.body; 

        console.log(req.body);
        const{id} = req.params
        const FormaPago= await modeloFormaPago.findByIdAndUpdate(id,{ pago,  acciones, estado }) 
        await FormaPago.save()
        res.send(FormaPago)


    },
}



export default FormaPagohttp