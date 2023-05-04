import conexion from "../baseDeDatos/configuracion.js";
import express from "express";
import rutasusuarios from "../rutas/usuarios.js";

class servidor{
    constructor(){
        this.app=express()
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
        this.app.use("/",(req,res)=>{
            res.send("life");
        })
        this.app.use("/usario",rutasusuarios)
    }
}

export default servidor