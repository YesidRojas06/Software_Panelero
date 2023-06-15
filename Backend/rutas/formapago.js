import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import formapagoHttp from "../controladores/formapago.js";
import helpersformapago from  "../helpers/formapago.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.get('/total',formapagoHttp.todopagoGet);

 
router.get('/activo',formapagoHttp.formapagoactivoGet);

router.post('/',

[
    check(['nombre'],'Todos los campos son requeridos').not().isEmpty(),
 
], 
formapagoHttp.formapagoPost);

router.put('/actualizacion/:id',
[
    check('id').custom(helpersformapago.existPaymentId),
    
], 
formapagoHttp.formapagoinfoPut);

router.put('/estado/:id',
[
    check('id').custom(helpersformapago.existPaymentId),
    
], 


formapagoHttp.formapagoestadoPut);

export default router



// [check("token").custom(validarJWT),validarCampos],
// [check("token").custom(validarJWT),validarCampos],
   // check("token").custom(validarJWT),validarCampos
// check("token").custom(validarJWT),validarCampos
// check("token").custom(validarJWT),validarCampos