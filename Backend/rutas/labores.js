import { Router } from "express";
import laboreshttp from "../controladores/labores.js";
import { check } from "express-validator";
import helpersLabores from "../helpers/labores.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutaslabores = Router();

rutaslabores.get("/",laboreshttp.laboresGet);

//rutaslabores.get("/",laboreshttp.laboresGetBuscar);
rutaslabores.get("/",laboreshttp.laboresSearchForTextGet);
rutaslabores.delete("/",laboreshttp.laboresDelete);
rutaslabores.put("/desactivar/:id",laboreshttp.laboresInactivoput);
rutaslabores.put("/activar/:id",laboreshttp.laboresActivoput);
rutaslabores.put("/:id",laboreshttp.laboresput);
rutaslabores.post('/',laboreshttp.laboresPost); 


//[
   // check('nombre_labor', 'El nombre de la labor es obligatoria').not().isEmpty(),
   // check('area_realizar', 'El área a realizar es obligatoria').not().isEmpty(),
    //check("pago_diario", "El pago diario no es valido").isMongoId(),
    //check("nombre_labor").custom(helpersLabores),
   // validarCampos], 
    
    

export default rutaslabores;