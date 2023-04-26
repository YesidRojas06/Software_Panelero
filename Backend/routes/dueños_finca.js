import { Router } from "express";
import { check } from "express-validator";
import { duenos_fincaDelete, uenoGet, DuenoGetbuscar, DuenoGetbuscarid, DuenoGetListar, DuenoPost, DuenoPut } from "../controllers/dueños_finca.js";
import helpersDuenos from "../helpers/dueños_finca.js";
import helperscoordinacion from "../helpers/usuario.js";
import { validarCampos } from "../middleware/validar_campos.js";
import { validarMongoIdN } from "../middleware/validar_mongoid.js";


const router = Router();
router.get("/buscarid/:id",[    
    check('id', 'No es un ID válido').isMongoId(),
     
    validarCampos     
],
 DuenoGetbuscarid   );

router.get("/buscardueno_finca",[
    check('nombre', 'No es un nombre de dueño valido, por favor inserte el nombre válido del dueño!').not().isEmpty(),

    validarCampos
],
 DuenoGetbuscar    );


router.delete("/eliminar/:id", [
    
    check('id', 'eliminado').isMongoId(),
    check('id').custom(helpersDuenos.existeidById), 
    validarCampos   

],DuenoDelete);

//validate field img
function validateImg(img) {
    if (!img) {
      throw new Error("La imagen es obligatoria");
    }
    if (!img.mimetype.includes("image")) {
      throw new Error("El archivo debe ser una imagen");
    }
  };


router.post('/',[    
    check('nombre', 'El nombre es obligatorio!').notEmpty(),
    check('apellido', 'El apellido es obligatorio!').notEmpty(),
    check("foto").custom((value, { req }) => {
        
        const img =req.files.foto || ''
        if (!img) {
            throw new Error("La imagen es obligatoria");
          }
          if (!img.mimetype.includes("image")) {
            throw new Error("El archivo debe ser una imagen");
          }
        return true;
      }),

    validarCampos     
],DuenoPost);

router.put('/:id',[ 
    check('id', 'eliminado').isMongoId(),
    check('id').custom(helpersDuenos.existeidById),   
    validarCampos     
],DuenoPut);



router.get("/listar",[
    
],
 DuenoGetListar    );


export default router;