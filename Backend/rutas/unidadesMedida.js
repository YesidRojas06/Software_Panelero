import { Router } from "express";
import uMediddahttp from "../controladores/unidadesMedida.js";
import { check } from "express-validator";
import helpersuMedidas from "../helpers/unidadesMedida.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutasuMedida = Router();

rutasuMedida.get("/",uMediddahttp.uMedidaget);
rutasuMedida.put("/",uMediddahttp.uMedidaput);
rutasuMedida.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check("nombre").custom(helpersuMedidas),
    validarCampos], uMediddahttp.uMedidapost);

export default rutasuMedida;