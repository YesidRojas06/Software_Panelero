import { Router } from "express";
import inclusionhttp from "../controladores/inclusionInventario.js";
import { check } from "express-validator";
import helpersIdatosDI from "../helpers/inclusionInventario.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutasinclusionI = Router();

rutasinclusionI.put("/", inclusionhttp.InclusionActualizarPut);
rutasinclusionI.delete("/", inclusionhttp.InclusionDelete);
rutasinclusionI.get("/", inclusionhttp.InclusionGet);
rutasinclusionI.post('/', [
    check('costo', 'El costo es obligatorio').not().isEmpty(),
    check("codigo", "No es un codigo valido").isMongoId(),
    check("codigo").custom(helpersIdatosDI.existeBodegaById),
    validarCampos], inclusionhttp.InclusionPost)

export default rutasinclusionI; 