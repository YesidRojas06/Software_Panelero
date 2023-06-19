import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import tipoempaqueHttp from "../controladores/tipoempaque.js";
import helperstipoempaque from "../helpers/tipoempaque.js"
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.get('/all',
// [check("token").custom(validarJWT),validarCampos], 
tipoempaqueHttp.tipoempaqueGetAll);

router.get('/activo',
// [check("token").custom(validarJWT),validarCampos], 
tipoempaqueHttp.tipoempaqueGetActive);

router.post('/',
[
    check(['name','maxWeight','unitsPerBox'],'Todos los campos son requeridos').not().isEmpty(),
    // check("token").custom(validarJWT),validarCampos
], 
tipoempaqueHttp.tipoempaquePost);

router.put('/update/:id',
[
    check('id').custom(helperstipoempaque.existtipoempaqueId),
    // check("token").custom(validarJWT),validarCampos
], 
tipoempaqueHttp.tipoempaquePutInfo);

router.put('/estado/:id',
[
    check('id').custom(helperstipoempaque.existtipoempaqueId),
    // check("token").custom(validarJWT),validarCampos
], 
tipoempaqueHttp.tipoempaquePutestado);



export default router
