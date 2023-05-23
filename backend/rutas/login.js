import { Router } from "express";
import loginhttp from "../controladores/login.js";
import { check } from "express-validator";
import helperslogin from "../helpers/login.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutaslogin = Router();

rutaslogin.post('/', [
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check("contaseña", "La contraseña no es valida").isMongoId(),
    check("contraseña").custom(helperslogin.existeinventario),
    validarCampos], loginhttp.LoginPost);

export default rutaslogin;