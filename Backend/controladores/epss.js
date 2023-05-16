import modeloeps from "../modelos/epss.js";


const epshttp = {
    epsget: async (req, res) => {
        const eps = await modeloeps.find()
        res.json({epss:eps})
    },

    epspost: async(req ,res) => {

        let {nombre_eps, seccional, linea_atencion, acciones}= req.body

        const eps = new modeloeps({nombre_eps, seccional, linea_atencion, acciones})
        await eps.save()
        res.send("eps creada")
    },

    epsput: async(req,res) =>{
        const {nombre_eps, seccional} = req.body

        console.log(req.body);
        const {id}= req.params
        const eps = await modeloeps.findByIdAndUpdate(id,{nombre_eps,seccional})
        await eps.save()
        res.send(eps)
    },

}

export default epshttp