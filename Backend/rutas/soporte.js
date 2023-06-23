import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import soporteHttp from "../controladores/soporte.js";
import helperssoporte from "../helpers/soporte.js"
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.get('/',[], soporteHttp.soporteGetAll);

router.post('/',
[
    check(['emailusuario','comentario'],'Todos los campos son requeridos').not().isEmpty(),
    // check("token").custom(validarJWT),validarCampos
], 
soporteHttp.soportePost);

router.put('/:id',
[
    check('id').custom(helperssoporte.existsoporteId),
    // check("token").custom(validarJWT),validarCampos
], 
soporteHttp.soportePutInfo);

router.put('/desactivar/:id',
[
    check('id').custom(helperssoporte.existsoporteId),
    // check("token").custom(validarJWT),validarCampos
], 
soporteHttp.soporteInactivoput);

router.put('/activar/:id',
[
    check('id').custom(helperssoporte.existsoporteId),
    // check("token").custom(validarJWT),validarCampos
], 
soporteHttp.soporteActivoput);



export default router
