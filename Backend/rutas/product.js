import { Router } from "express";
import productHttp from "../../controllers/Inventory/Product.js";
import {check} from "express-validator";
import { validarJWT } from "../../middlewares/Login/validar-jwt.js";

import helpersProduct from "../../helpers/Inventory/Product.js";
const router=Router();


router.post('/',
[
    check('amount','El campo cantidad es obligatorio').not().isEmpty(),
    check('expense_name','El campo nombre es obligatorio').not().isEmpty(),
    check('administrator','El campo de administrador es obligatorio').not().isEmpty(),
    check('Finca','El campo de finca es obligatorio').not().isEmpty(),
    check('description','El campo de descripcion es obligatorio').not().isEmpty(),
    check('PAYMENT_METHOD','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('cost_value','El campo de valor del costo es obligatorio').not().isEmpty(),
    check('total','El campo de total es obligatorio').not().isEmpty(),
    check("token").custom(validarJWT),
        
], productHttp.ProductPost);


router.get('/',productHttp.ProductAllGet)


router.put('/update/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersProduct.existProductId), 
    check('amount','El campo cantidad es obligatorio').not().isEmpty(),
    check('expense_name','El campo nombre es obligatorio').not().isEmpty(),
    check('administrator','El campo de administrador es obligatorio').not().isEmpty(),
    check('Finca','El campo de finca es obligatorio').not().isEmpty(),
    check('description','El campo de descripcion es obligatorio').not().isEmpty(),
    check('PAYMENT_METHOD','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('cost_value','El campo de valor del costo es obligatorio').not().isEmpty(),
    check('total','El campo de total es obligatorio').not().isEmpty(),
    check("token").custom(validarJWT),

   
], 
productHttp.ProductPutId);


router.put('/state/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersProduct.existProductId),
    check("token").custom(validarJWT),
  
], 
productHttp.ProductPutState);








export default router