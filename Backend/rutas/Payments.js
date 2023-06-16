import { Router } from "express";
import { check } from "express-validator"
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";

import helpersPayments from "../../helpers/Cost/payments.js";
import paymentsHttp from "../../controllers/Costs/Payments.js"
const router=Router();




router.get('/', paymentsHttp.paymentsAllGet);


router.post('/',
[
check('DNI','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
check('ROL','El campo de Rol es obligatorio').not().isEmpty(),
check('CONCEPT','El campo de concepto es obligatorio').not().isEmpty(),
check('PAYMENT_METHOD','El campo de metodo de pago es obligatorio').not().isEmpty(),
check('TIME_TO_PAY','El campo de tiempo de pago es obligatorio').not().isEmpty(),
check('Total','El campo de tiempo de pago es obligatorio').not().isEmpty(),

], paymentsHttp.paymentsPost);
// check("token").custom(validarJWT),
//         validarCampos

router.put('/update/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersPayments.existPaymentsId), 
    check('DNI','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
    check('ROL','El campo de Rol es obligatorio').not().isEmpty(), 
    check('CONCEPT','El campo de concepto es obligatorio').not().isEmpty(),
    check('PAYMENT_METHOD','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('TIME_TO_PAY','El campo de tiempo de pago es obligatorio').not().isEmpty(),
    check('Total','El campo de tiempo de pago es obligatorio').not().isEmpty(),

], paymentsHttp.paymentsPutId);





router.put('/state/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersPayments.existPaymentsId),

], 
paymentsHttp.paymentsputState);




export default router