import { Router } from "express";
import gastosocasionalesHttp from "../controladores/gastosocasionales.js";
import {check} from "express-validator";
//import { validarJWT } from "../middleware/validar_campos.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";
import helpersgastosocasionales from "../helpers/gastosocasionales.js";

const router=Router();

router.post('/',[
    check('nombregasto','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('finca','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('descripcion','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('metododepago','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('costValue','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('Total','El campo de metodo de pago es obligatorio').not().isEmpty(),
    // check("token").custom(validarJWT),
], gastosocasionalesHttp.gastosocasionalesPost);




router.get('/', gastosocasionalesHttp.gastosocasionalesGet)




router.put('/update/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersgastosocasionales.existocasionalesId),
    check('nombregasto','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('finca','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('descripcion','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('metododepago','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('costValue','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('Total','El campo de metodo de pago es obligatorio').not().isEmpty(),
//    check("token").custom(validarJWT),
  
], 
gastosocasionalesHttp.gastosocasionalesPutId);



router.put('/estado/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersgastosocasionales.existocasionalesId),
    // check("token").custom(validarJWT),
 
], 
gastosocasionalesHttp.gastosocasionalesPutestado);



export default router