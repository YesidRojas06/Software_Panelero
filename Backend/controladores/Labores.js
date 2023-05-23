import modeloLabor from "../modelos/Labores.js";
import jwt from 'jsonwebtoken';

import bcrypt from "bcrypt";
import modeloLabor from "../modelos/Labores.js";



const Laborhttp= {
    Laborget:async(req,res) => {
        const Labor= await modeloLabor.find() 
        res.json({Labores:Labor})
    },
    Laborpost:async(req,res) => {

        let {nombreLabor, areaRealizar, pago, acciones, estado }= req.body

        bcrypt.hash(contrasena, 10, async function(err, hash) {
            contrasena = hash;
            console.log(contrasena)

            const Labor = new modeloLabor({nombreLabor, areaRealizar, pago, acciones, estado}) 
            await Labor.save()
            res.send("usuario creado")
        });
       
    },
    Laborput:async(req,res) => { 
        const{ nombreLabor, areaRealizar, pago, acciones, estado  } = req.body 

        console.log(req.body);
        const{id} = req.params
        const Labor = await modeloLabor.findByIdAndUpdate(id,{nombreLabor, areaRealizar, pago, acciones, estado }) 
        await Labor.save()
        res.send(Labor)


    },
}



export default Laborhttp