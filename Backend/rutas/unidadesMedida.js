import { Router } from "express";
import uMediddahttp from "../controladores/unidadesMedida.js";
// import { check } from "express-validator";
import helpersuMedidas from "../helpers/unidadesMedida.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutasuMedida = Router();

rutasuMedida.get("/",uMediddahttp.uMedidaIDget);
rutasuMedida.put("/desactivar/:id",uMediddahttp.uMedidaInactivoput)
rutasuMedida.put("/activar/:id", uMediddahttp.uMedidaActivoput)
rutasuMedida.put("/:id", uMediddahttp.uMedidaput)
rutasuMedida.post('/', 

uMediddahttp.uMedidapost);

export default rutasuMedida;