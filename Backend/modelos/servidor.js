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
import rutasetapas from "../rutas/etapas.js";
import rutasformapago from "../rutas/formapago.js";
import rutasmarcas from "../rutas/marcas.js";
import rutascategoria from "../rutas/categoria.js";
import rutasprocesodiario from "../rutas/procesodiario.js";
import rutasgastosmensuales from "../rutas/gastosmensuales.js";
import rutasgastosocasionales from "../rutas/gastosocasionales.js";
import rutasempaques from "../rutas/empaques.js";
import rutaspagos from "../rutas/pagos.js";
import rutasproductos from "../rutas/productos.js";
import rutasmateriaprimatrans from "../rutas/materiaprimatrans.js";
import rutastipoempaque from "../rutas/tipoempaque.js";
import rutastipopanela from "../rutas/tipopanela.js";
import rutastipopago from "../rutas/tipopago.js";
import rutassoporte from "../rutas/soporte.js";




dotenv.config()
class servidor {
    constructor(){
        this.app=express()
        this.app.use(express.json())
        this.app.use(cors());
        this.app.use(express.static('public'))
        this.conexion()
        this.rutas()
    }
    async conexion(){
        await conexion()
    }
    rutas(){
        this.app.use("/api/bodegas", rutasbodegas)
        this.app.use("/api/inventario", rutasinventario)
        this.app.use("/api/login", rutaslogin)
        this.app.use("/api/lotes", rutaslotes)
        this.app.use("/api/registro", rutasregistro)
        this.app.use("/api/usuario", rutasusuarios)
        this.app.use("/api/eps", rutaseps)
        this.app.use("/api/labores", rutaslabores)
        this.app.use("/api/unidadesMedida", rutasunidadesMedida)
        this.app.use("/api/tipoDocumento", rutastipoDocumento)
        this.app.use("/api/pedidos", rutaspedidos)
        this.app.use("/api/etapas", rutasetapas)
        this.app.use("/api/formapago", rutasformapago)
        this.app.use("/api/marcas", rutasmarcas)
        this.app.use("/api/categoria", rutascategoria)
        this.app.use("/api/procesodiario", rutasprocesodiario)
        this.app.use("/api/gastosmensuales", rutasgastosmensuales)
        this.app.use("/api/gastosocasionales", rutasgastosocasionales)
        this.app.use("/api/empaques", rutasempaques)
        this.app.use("/api/pagos", rutaspagos)
        this.app.use("/api/productos" , rutasproductos)
        this.app.use("/api/materiaprimatrans", rutasmateriaprimatrans)
        this.app.use("/api/tipoempaque", rutastipoempaque)
        this.app.use("/api/tipopanela", rutastipopanela)
        this.app.use("/api/tipopago", rutastipopago)
        this.app.use("/api/soporte", rutassoporte)
       



            this.app.use("/api", (req,res) => {
                res.send('life')
            })
    }

    listen(){
        this.app.listen(4000,()=>{
            console.log("Escuchando puerto 4000 ")
        })
    }
}

export default servidor