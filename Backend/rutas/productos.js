import { Router } from "express";
import productosHttp from "../controladores/productos.js";
import {check} from "express-validator";
//import { validarJWT } from "../middleware/validar_campos.js";
import helpersproductos from "../helpers/productos.js";

const router=Router();


router.post('/',
[
    check('cantidad','El campo cantidad es obligatorio').not().isEmpty(),
    check('nombregasto','El campo nombre es obligatorio').not().isEmpty(),
    check('administrator','El campo de administrador es obligatorio').not().isEmpty(),
    check('finca','El campo de finca es obligatorio').not().isEmpty(),
    check('descripcion','El campo de descripcion es obligatorio').not().isEmpty(),
    check('formapago','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('cost_value','El campo de valor del costo es obligatorio').not().isEmpty(),
    check('total','El campo de total es obligatorio').not().isEmpty(),
    //check("token").custom(validarJWT),
        
], productosHttp.productosPost);


router.get('/',productosHttp.productosAllGet)


router.put('/update/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersproductos.existproductosId), 
    check('cantidad','El campo cantidad es obligatorio').not().isEmpty(),
    check('nombregasto','El campo nombre es obligatorio').not().isEmpty(),
    check('administrator','El campo de administrador es obligatorio').not().isEmpty(),
    check('finca','El campo de finca es obligatorio').not().isEmpty(),
    check('descripcion','El campo de descripcion es obligatorio').not().isEmpty(),
    check('formapago','El campo de metodo de pago es obligatorio').not().isEmpty(),
    check('cost_value','El campo de valor del costo es obligatorio').not().isEmpty(),
    check('total','El campo de total es obligatorio').not().isEmpty(),
    //check("token").custom(validarJWT),

   
], 
productosHttp.productosPutId);


router.put('/estado/:id',
[   
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersproductos.existproductosId),
    //check("token").custom(validarJWT),
  
], 
productosHttp.productosPutestado);








export default router