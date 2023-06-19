import { Router } from "express";
import gastosmensualesHttp from "../controladores/gastosmensuales.js";
import {check} from "express-validator";
//import { validarJWT } from "../middleware/validar_campos.js";
import helpersgastosmensuales from "../helpers/gastosmensuales.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();



router.get('/', gastosmensualesHttp.gastosmensualesAllGet)


router.post('/',[
    check('nombregasto','El metodo de pago es obligatorio').not().isEmpty(),
    check('finca','El metodo de pago es obligatorio').not().isEmpty(),
    check('descripcion','El metodo de pago es obligatorio').not().isEmpty(),
    check('metododepago','El metodo de pago es obligatorio').not().isEmpty(),
    check('costValue','El metodo de pago es obligatorio').not().isEmpty(),
    check('Total','El total es obligatorio').not().isEmpty(),
 
], gastosmensualesHttp.gastosmensualesPost)



router.put('/update/:id',[
    check('id').custom(helpersgastosmensuales.existmensualesId),
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('nombregasto','El metodo de pago es obligatorio').not().isEmpty(),
    check('finca','El metodo de pago es obligatorio').not().isEmpty(),
    check('descripcion','El metodo de pago es obligatorio').not().isEmpty(),
    check('metododepago','El metodo de pago es obligatorio').not().isEmpty(),
    check('costValue','El metodo de pago es obligatorio').not().isEmpty(), 
    check('Total','El total es obligatorio').not().isEmpty(),
    
        
  
], 
gastosmensualesHttp.gastosmensualesPutId);


router.put('/estado/:id',[  
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersgastosmensuales.existmensualesId),
   


],  gastosmensualesHttp.gastosmensualesPutestado)



export default router