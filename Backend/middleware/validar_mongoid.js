import mongoose from "mongoose";

const validarMongoId = async(reparto) => {
  if (reparto.length > 0) {
    for (let i = 0; i < reparto.length; i++) {
      const element = reparto[i].idactor;
      const valido =  mongoose.Types.ObjectId.isValid(element);
      if (!valido) {
        throw new Error("el id no es valido" );
      }
    }
  }
};

const validarMongoIdN=async(_id) => {
  const validar= mongoose.Types.ObjectId.isValid(_id);
  if(!validar) {
    throw new Error("el id no es valido")
  }
}

export {validarMongoId,validarMongoIdN}