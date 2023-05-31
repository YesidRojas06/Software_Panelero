import { Router } from "express";
import epshttp from "../controladores/eps.js";
import { check } from "express-validator";
import helperseps from "../helpers/eps.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutaseps = Router();

rutaseps.get("/",epshttp.epsGet);
rutaseps.get("/",epshttp.epsSearchForTextGet);
rutaseps.delete("/",epshttp.epsDelete);
rutaseps.post('/', [
    check('nombre', 'Los nombre es obligatorio').not().isEmpty(),
    check('n_linea', 'El numero de linea es obligatoria').not().isEmpty(),
    check("n_linea").custom(helperseps),
    validarCampos], epshttp.epsPost);

export default rutaseps;