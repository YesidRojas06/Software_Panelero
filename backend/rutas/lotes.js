import { Router } from "express";
import loteshttp from "../controladores/lotes.js";
import { check } from "express-validator";
import helperslotes from "../helpers/lotes.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutaslotes = Router();

rutaslotes.get("/",loteshttp.lotesgetListar);
rutaslotes.get("/",loteshttp.lotesIdGet);
rutaslotes.get("/",loteshttp.lotesGetBuscar);
rutaslotes.delete("/",loteshttp.lotesDelete);
rutaslotes.post('/', [
    check('nombres', 'Los nombres son obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check("codigo", "No es un codigo valido").isMongoId(),
    check("codigo").custom(helperslotes.existelotes),
    validarCampos], loteshttp.lotesPost);

export default rutaslotes;