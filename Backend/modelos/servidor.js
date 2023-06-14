import conexion from "../baseDeDatos/configuracion.js";
import cors from 'cors'
import express from "express";
import * as dotenv from 'dotenv'
import rutasbodegas from "../rutas/bodegas.js";
import rutasinventario from "../rutas/inventario.js";
import rutaslogin from "../rutas/login.js";
import rutaslotes from "../rutas/lotes.js";
import rutasregistro from "../rutas/registro.js";
import rutasusuarios from "../rutas/usuarios.js";
import rutaseps from "../rutas/eps.js";
import rutaslabores from "../rutas/labores.js";
import rutasunidadesMedida from "../rutas/unidadesMedida.js";
import rutastipoDocumento from "../rutas/tipoDocumento.js";
import rutaspedidos from "../rutas/pedidos.js";









dotenv.config()
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
        this.app.use("/inventario", rutasinventario)
        this.app.use("/login", rutaslogin)
        this.app.use("/lotes", rutaslotes)
        this.app.use("/registro", rutasregistro)
        this.app.use("/usuario", rutasusuarios)
        this.app.use("/eps", rutaseps)
        this.app.use("/labores", rutaslabores)
        this.app.use("/unidadesMedida", rutasunidadesMedida)
        this.app.use("/tipoDocumento", rutastipoDocumento)
        this.app.use("/pedidos", rutaspedidos)




        
            this.app.use("/", (req,res) => {
                res.send('life')
            })
    }

    listen(){
        this.app.listen(4503,()=>{
            console.log("Escuchando puerto 4503 ")
        })
    }
}

export default servidor