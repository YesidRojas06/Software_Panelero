import { Router } from "express";
import monthlyExpensesHttp from "../../controllers/Costs/monthlyExpenses.js";
import {check} from "express-validator";
import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import helpersMonthlyExpenses from "../../helpers/Cost/monthlyExpenses.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();



router.get('/', monthlyExpensesHttp.monthlyExpensesAllGet)


router.post('/',[
    check('Name_spent','El metodo de pago es obligatorio').not().isEmpty(),
    check('Finca','El metodo de pago es obligatorio').not().isEmpty(),
    check('Description','El metodo de pago es obligatorio').not().isEmpty(),
    check('PAYMENT_METHOD','El metodo de pago es obligatorio').not().isEmpty(),
    check('costValue','El metodo de pago es obligatorio').not().isEmpty(),
    check('Total','El total es obligatorio').not().isEmpty(),
 
], monthlyExpensesHttp.monthlyExpensesPost)



router.put('/update/:id',[
    check('id').custom(helpersMonthlyExpenses.existMonthlyId),
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('Name_spent','El metodo de pago es obligatorio').not().isEmpty(),
    check('Finca','El metodo de pago es obligatorio').not().isEmpty(),
    check('Description','El metodo de pago es obligatorio').not().isEmpty(),
    check('PAYMENT_METHOD','El metodo de pago es obligatorio').not().isEmpty(),
    check('costValue','El metodo de pago es obligatorio').not().isEmpty(), 
    check('Total','El total es obligatorio').not().isEmpty(),
    
        
  
], 
monthlyExpensesHttp.monthlyExpensesPutId);


router.put('/state/:id',[  
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersMonthlyExpenses.existMonthlyId),
   


],  monthlyExpensesHttp.monthlyExpensesPutState)



export default router