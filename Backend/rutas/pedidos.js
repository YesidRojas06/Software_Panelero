import { Router } from "express";
import PedidoHttp from "../controladores/pedidos.js";
import {check} from "express-validator";


import helpersPedidos from "../helpers/pedidos.js"


const router=Router();

router.get('/', PedidoHttp.pedidoGet)

router.post('/',
    [
        check("documento", "El documento es obligatorio").not().isEmpty(),
        check("telefono", "El telefono es obligatorio").not().isEmpty(),
        check("tipoPanela", "El tipo de panela es obligatorio").not().isEmpty(),
        check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
        check("comprobantePago", "El comprobante de pago es obligatorio").not().isEmpty(),
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("direccion", "La direccion es obligatoria").not().isEmpty(),
        check("formaPanela", "La forma de la panela es obligatoria").not().isEmpty(),
        check("tipoEmpaque", "El tipo de empaque es obligatorio").not().isEmpty(),
        check("abono", "El abono es obligatorio").not().isEmpty(),
        check("valorTotal", "El valor total es obligatorio").not().isEmpty(),
        // check("token").custom(validarJWT),
], PedidoHttp.pedidoPost)   



router.put('/state/:id',
[
    check('id').custom(helpersPedidos.pedidoPut),
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    // check("token").custom(validarJWT),

],
)


export default router