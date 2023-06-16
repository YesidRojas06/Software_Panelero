import { Router } from "express";
import {check} from "express-validator";

import typePayHttp from "../controladores/tipodepago.js";
import helperPay from "../helpers/tipodepago.js"


const router=Router();

router.get('/',
 typePayHttp.typePayGetAll);

 router.get('/active',
 typePayHttp.typePayGetActive);

router.post('/',
[
    check(['name'],'Todos los campos son requeridos').not().isEmpty(),
    // check("token").custom(validarJWT),validarCampos
], 
typePayHttp.typePayPost);

router.put('/update/:id',
[
    check('id').custom(helperPay.existPayId),
    // check("token").custom(validarJWT),validarCampos
], 
typePayHttp.typePayPutInfo);

router.put('/state/:id',
[
    check('id').custom(helperPay.existPayId),
    // check("token").custom(validarJWT),validarCampos
], 
typePayHttp.typePayStatePut);



export default router
