import { Router } from "express";
import { check } from "express-validator"
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";

import helperspagos from "../helpers/pagos.js";
import pagosHttp from "../controladores/pagos.js"
const router=Router();




router.get('/', pagosHttp.pagosAllGet);


router.post('/',
[
check('dni','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
check('rol','El campo de Rol es obligatorio').not().isEmpty(),
check('concepto','El campo de concepto es obligatorio').not().isEmpty(),
check('formapago','El campo de metodo de pago es obligatorio').not().isEmpty(),
check('tiempoparapagar','El campo de tiempo de pago es obligatorio').not().isEmpty(),
check('Total','El campo de tiempo de pago es obligatorio').not().isEmpty(),

], pagosHttp.pagosPost);
// check("token").custom(validarJWT),
//         validarCampos

router.put('/update/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helperspagos.existpagosId), 
    check('dni','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
    check('rol','El campo de Rol es obligatorio').not().isEmpty(), 
    check('concepto','El campo de concepto es obligatorio').not().isEmpty(),
    check('formapago','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('tiempoparapagar','El campo de tiempo de pago es obligatorio').not().isEmpty(),
    check('Total','El campo de tiempo de pago es obligatorio').not().isEmpty(),

], pagosHttp.pagosPutId);





router.put('/estado/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helperspagos.existpagosId),

], 
pagosHttp.pagosputestado);




export default router