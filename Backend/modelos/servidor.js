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
        this.conexion()
        this.rutas()
    }
    async conexion(){
        await conexion()
    }
    rutas(){
        this.app.use("/bodegas", rutasbodegas)
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
        this.app.use("/etapas", rutasetapas)
        this.app.use("/formapago", rutasformapago)
        this.app.use("/marcas", rutasmarcas)
        this.app.use("/categoria", rutascategoria)
        this.app.use("/procesodiario", rutasprocesodiario)
        this.app.use("/gastosmensuales", rutasgastosmensuales)
        this.app.use("/gastosocasionales", rutasgastosocasionales)
        this.app.use("/empaques", rutasempaques)
        this.app.use("/pagos", rutaspagos)
        this.app.use("/productos" , rutasproductos)
        this.app.use("/materiaprimatrans", rutasmateriaprimatrans)
        this.app.use("/tipoempaque", rutastipoempaque)
        this.app.use("/tipopanela", rutastipopanela)
        this.app.use("/tipopago", rutastipopago)
        this.app.use("/soporte", rutassoporte)
       



            this.app.use("/", (req,res) => {
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