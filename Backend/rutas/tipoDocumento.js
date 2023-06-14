import { Router } from "express";
import tipoDocumentohttp from "../controladores/tipoDocumento.js";
import { check } from "express-validator";
import helperstipoDocumento from "../helpers/tipoDocumento.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutastipos_documento = Router();

rutastipos_documento.get("/",tipoDocumentohttp.tipoDocumentoget);
//rutastipos_documento.put("/",tDocumentohttp.tDocumentoput);
rutastipos_documento.put("/desactivar/:id",tipoDocumentohttp.tipoDocumentoInactivoput);
rutastipos_documento.put("/activar/:id",tipoDocumentohttp.tipoDocumentoActivoput);
rutastipos_documento.put("/:id",tipoDocumentohttp.tipoDocumentoput);
rutastipos_documento.post('/', 

//[
    //check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    //check('siglas', 'Las siglas son obligatorias').not().isEmpty(),
    //check("nombre", "No es un nombre valido").isMongoId(),
    //check("nombre").custom(helperstipoDocumento),
    //validarCampos], 
    
    tipoDocumentohttp.tipoDocumentoPost);

export default rutastipos_documento;