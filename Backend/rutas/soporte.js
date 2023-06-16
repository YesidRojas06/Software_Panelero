import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import supportHttp from "../controladores/soporte.js";
import helperSupport from "../helpers/soporte.js"
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.get('/',[], supportHttp.supportGetAll);

router.post('/',
[
    check(['emailUser','ciment'],'Todos los campos son requeridos').not().isEmpty(),
    // check("token").custom(validarJWT),validarCampos
], 
supportHttp.supportPost);

router.put('/:id',
[
    check('id').custom(helperSupport.existSupportId),
    // check("token").custom(validarJWT),validarCampos
], 
supportHttp.supportPutInfo);

router.put('/desactivar/:id',
[
    check('id').custom(helperSupport.existSupportId),
    // check("token").custom(validarJWT),validarCampos
], 
supportHttp.soporteInactivoput);

router.put('/activar/:id',
[
    check('id').custom(helperSupport.existSupportId),
    // check("token").custom(validarJWT),validarCampos
], 
supportHttp.soporteActivoput);



export default router
