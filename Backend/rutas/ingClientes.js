import { Router } from "express";
import clienteshttp from "../controladores/ingClientes.js";
import { check } from "express-validator";
import helpersIclientes from "../helpers/ingClientes.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutasclientes = Router();

rutasclientes.get("/",clienteshttp.clientesget);
rutasclientes.put("/",clienteshttp.clientesPut);
rutasclientes.delete("/",clienteshttp.clientesDelete);
rutasclientes.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('direccion', 'La direccion es obligatoria').not().isEmpty(),
    check('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    check("cedula", "No es un codigo valido").isMongoId(),
    check("cedula").custom(helpersIclientes.existeCliente),
    validarCampos], clienteshttp.clientesPost);

export default rutasclientes;

