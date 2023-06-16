import DailyProcess from "../../models/Trans/DailyProcess.js"

const helpersdailyProcess = {
    existDailyId: async(id, req) => {
        console.log("---------------------------Aqui toy-------------")
        try{
        const exist = await DailyProcess.findById(id)
        if(!exist){
            throw new Error();
        }
    }catch(err){
        console.log('-----------------------------------------------------' + err);
        throw new Error('El proceso no existe')
    }
    }
};

export default helpersdailyProcess;

