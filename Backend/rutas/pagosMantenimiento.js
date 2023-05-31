import { Router } from "express";
import pagoshttp from "../controladores/pagosMantenimiento.js";
import { check } from "express-validator";
import helpersPagos from "../helpers/pagosMantenimiento.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutaspagos = Router();

rutaspagos.get("/",pagoshttp.pagosget);
rutaspagos.put("/",pagoshttp.pagosput);
rutaspagos.post('/', [
    check('tipo_pago', 'El tipo de pago es obligatorio').not().isEmpty(),
    check("tipo_pago").custom(helpersPagos),
    validarCampos], pagoshttp.pagospost);

export default rutaspagos;