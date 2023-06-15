import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import tipopagoHttp from "../controladores/tipopago.js";
import helperstipopago from "../helpers/tipopago.js"
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.get('/total',tipopagoHttp.todotipopGet);

 router.get('/activo',tipopagoHttp.tipopagoactivoGet);

router.post('/',

[
    check(['name'],'Todos los campos son requeridos').not().isEmpty(),
   
], 
tipopagoHttp.tipopagoPost);

router.put('/actualizacion/:id',
[
    check('id').custom(helperstipopago.existtipopagoid),

], 
tipopagoHttp.tipopagoinfoPut);

router.put('/estado/:id',
[
    check('id').custom(helperstipopago.existtipopagoid),
    
], 


tipopagoHttp.tipopagoestadoPut);



export default router




// [check("token").custom(validarJWT),validarCampos],
// [check("token").custom(validarJWT),validarCampos],
 // check("token").custom(validarJWT),validarCampos
    // check("token").custom(validarJWT),validarCampos
// check("token").custom(validarJWT),validarCampos
