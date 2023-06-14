import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import tipopagoHttp from "../controladores/tipopago.js";
import helperstipopago from "../helpers/tipopago.js"
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.get('/total',
// [check("token").custom(validarJWT),validarCampos],
tipopagoHttp.todotipopGet);

 router.get('/activo',
// [check("token").custom(validarJWT),validarCampos],
tipopagoHttp.tipopagoactivoGet);

router.post('/',
[
    check(['name'],'Todos los campos son requeridos').not().isEmpty(),
    // check("token").custom(validarJWT),validarCampos
], 
tipopagoHttp.tipopagoPost);

router.put('/actualizacion/:id',
[
    check('id').custom(helperstipopago.existtipopagoid),
    // check("token").custom(validarJWT),validarCampos
], 
tipopagoHttp.tipopagoinfoPut);

router.put('/estado/:id',
[
    check('id').custom(helperstipopago.existtipopagoid),
    // check("token").custom(validarJWT),validarCampos
], 
tipopagoHttp.tipopagoestadoPut);



export default router
