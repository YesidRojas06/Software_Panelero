import conexion from "../baseDeDatos/configuracion.js";
import cors from 'cors'
import express from "express";
import rutasusuarios from "../rutas/usuarios.js";

class servidor{
    constructor(){
        this.app=express()
        this.app.use(cors());
        this.app.use(express.json())
        this.rutas()
        this.conexion()
    }
    async conexion(){
        await conexion()
    }
    listen(){
        this.app.listen("3100",()=>{
            console.log("servidor en linea")
        })
    }
    rutas(){
        
        this.app.use("/usuario",rutasusuarios)
        this.app.use("/", (req,res) => {
            res.send('life')
        })
    }
}

export default servidor