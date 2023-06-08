import { Router } from "express";
import unidadesMedidahttp from "../controladores/unidadesMedida.js";
 import { check } from "express-validator";
import helpersuMedidas from "../helpers/unidadesMedida.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutasuMedida = Router();

rutasuMedida.get("/",unidadesMedidahttp.unidadesMedidaIDget);
rutasuMedida.get("/",unidadesMedidahttp.unidadesMedidaSearchForTextGet);
rutasuMedida.put("/desactivar/:id",unidadesMedidahttp.unidadesMedidaInactivoput)
rutasuMedida.put("/activar/:id", unidadesMedidahttp.unidadesMedidaActivoput)
rutasuMedida.put("/:id", unidadesMedidahttp.unidadesMedidaput)
rutasuMedida.post('/', 

unidadesMedidahttp.unidadesMedidapost);

export default rutasuMedida;