import conexion from "../baseDeDatos/configuracion.js";
import cors from 'cors'
import express from "express";
import rutasbodegas from "../rutas/bodegas.js";
import rutasingClientes from "../rutas/ingClientes.js";
import rutasconsultasInventario from "../rutas/consultasInventario.js";
import rutasinclusionCostos from "../rutas/inclusionCostos.js";
import rutasinclusionInventario from "../rutas/inclusionInventario.js";
import rutasinventario from "../rutas/inventario.js";
import rutaslogin from "../rutas/login.js";
import rutaslotes from "../rutas/lotes.js";
import rutasingProveedores from "../rutas/ingProveedores.js";
import rutasregistro from "../rutas/registro.js";
import rutasusuarios from "../rutas/usuarios.js";

class servidor {
    constructor(){
        this.app=express()
        this.app.use(express.json())
        this.app.use(cors());
        this.conexion()
        this.rutas()
    }
    async conexion(){
        await conexion()
    }
    rutas(){
        this.app.use("/bodegas", rutasbodegas)
        this.app.use("/clientes", rutasingClientes)
        this.app.use("/consultasInventario", rutasconsultasInventario)
        this.app.use("/inclusionCostos", rutasinclusionCostos)
        this.app.use("/inclusionInventario", rutasinclusionInventario)
        this.app.use("/inventario", rutasinventario)
        this.app.use("/login", rutaslogin)
        this.app.use("/lotes", rutaslotes)
        this.app.use("/ingProveedores", rutasingProveedores)
        this.app.use("/registro", rutasregistro)
        this.app.use("/usuario", rutasusuarios)
    }
    listen(){
        this.app.listen("4100",()=>{
            console.log("Escuchando puerto 4100 ")
        })
    }
}

export default servidor