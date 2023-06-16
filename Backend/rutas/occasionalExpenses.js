import { Router } from "express";
import occasionalExpensesHttp from "../../controllers/Costs/occasionalExpenses.js";
import {check} from "express-validator";
import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

import helpersOccasionalExpenses from "../../helpers/Cost/occasionalExpenses.js";

const router=Router();

router.post('/',[
    check('Name_spent','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('Finca','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('Description','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('PAYMENT_METHOD','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('costValue','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('Total','El campo de metodo de pago es obligatorio').not().isEmpty(),
    // check("token").custom(validarJWT),
], occasionalExpensesHttp.occasionalExpensesPost);




router.get('/', occasionalExpensesHttp.occasionalExpensesGet)




router.put('/update/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersOccasionalExpenses.existExpensesId),
    check('Name_spent','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('Finca','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('Description','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('PAYMENT_METHOD','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('costValue','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('Total','El campo de metodo de pago es obligatorio').not().isEmpty(),
//    check("token").custom(validarJWT),
  
], 
occasionalExpensesHttp.occasionalExpensesPutId);



router.put('/state/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersOccasionalExpenses.existExpensesId),
    // check("token").custom(validarJWT),
 
], 
occasionalExpensesHttp.occasionalExpensesPutState);



export default router