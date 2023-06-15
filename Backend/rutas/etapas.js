import { Router } from "express";
import etapashttp from "../controladores/etapas.js";
// import { check } from "express-validator";
// import helpersLabores from "../helpers/labores.js";
// import { validarCampos } from "../helpers/middleware/validar_campos.js";

const rutasetapas = Router();

rutasetapas.get("/",etapashttp.etapasget);
rutasetapas.get("/",etapashttp.etapasSearchForTextGet);
rutasetapas.delete("/",etapashttp.etapasDelete);
rutasetapas.put("/desactivar/:id",etapashttp.etapasInactivoput);
rutasetapas.put("/activar/:id",etapashttp.etapasActivoput);
rutasetapas.put("/:id",etapashttp.etapasput);
rutasetapas.post('/', etapashttp.etapaspost);

export default rutasetapas;
