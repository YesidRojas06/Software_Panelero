import modeloformapago from "../modelos/formapago.js";
//import formapago from "../modelos/formapago.js";


const formapagoHttp = {

  formapagoGet: async (req, res) => {
    const formapago = await modeloformapago.find();
    res.json({
      formapago
    });
  },

  formapagoPost:async (req, res) => {
    const { codigoPago, nombrePago, tipoPago, fecha } = req.body;
    const formapago = new modeloformapago({ 
      codigoPago, 
      nombrePago, 
      tipoPago, 
      fecha
    });
  
    await formapago.save();
    res.json({
      formapago,
    });
  },

  
  formapagoSearchForTextGet:async (req, res) => {
    const { codigoPago, nombrePago, tipoPago, fecha } = req.query;
    const formapago = await formapago.find({ 
      codigoPago, 
      nombrePago, 
      tipoPago, 
      fecha 
    });
    res.json({
      formapago,
    });
  },



  formapagoput: async (req, res) => {
    const { codigoPago, nombrePago, tipoPago, fecha } = req.body;

    console.log(req.body);
    const { id } = req.params;
    const formapago = await modeloformapago.findByIdAndUpdate(id, {
      codigoPago,
      nombrePago, 
      tipoPago, 
      fecha
      
    });
    await formapago.save();
    res.send(formapago);
  },

  formapagoActivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const formapago = await modeloformapago.findByIdAndUpdate(id, { estado: 1 });
    res.send(formapago);
  },

  formapagoInactivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const formapago = await modeloformapago.findByIdAndUpdate(id, { estado: 0 });
    res.send(formapago);
  },



}

export default formapagoHttp;
