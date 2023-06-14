import pedidos from "../modelos/pedidos.js";

const PedidoHttp = {
  pedidoGet: async (req, res) => {
    const pedido = await pedidos.find();
    res.json({ pedido });
  },

  pedidoPost: async (req, res) => {
    const {
      Documento,
      Telefono,
      TipoPanela,
      Cantidad,
      ComprobantePago,
      Nombre,
      Direccion,
      FormaPanela,
      TipoEmpaque,
      Abono,
      ValorTotal,

    } = req.body;
    const neworder = new pedidos({
      Documento,
      Telefono,
      Nombre,
      Direccion,
      ComprobantePago,
      SaldoPendiente,
      TipoPanela,
      FormaPanela,
      Cantidad,
      TipoEmpaque,
      Abono,
      ValorTotal,
    });
    await neworder.save();
    res.json({ msg: "Pedido Guardado" });
  },

  pedidoPut: async (req, res) => {
    const { id } = req.params;
    const {
      Documento,
      Telefono,
      Nombre,
      Direccion,
      ComprobantePago,
      SaldoPendiente,
      TipoPanela,
      FormaPanela,
      Cantidad,
      TipoEmpaque,
      Abono,
      ValorTotal,
    } = req.body;
    const orderUpdate = await pedidos.findByIdAndUpdate(id, {
      Documento: Documento,
      Telefono: Telefono,
      Nombre: Nombre,
      Direccion: Direccion,
      ComprobantePago: ComprobantePago,
      SaldoPendiente: SaldoPendiente,
      TipoPanela: TipoPanela,
      FormaPanela: FormaPanela,
      Cantidad: Cantidad,
      TipoEmpaque: TipoEmpaque,
      Abono: Abono,
      ValorTotal: ValorTotal,
    });
    await orderUpdate.save();
    res.json({ msg:"Pedido Modificado"});
  },
  pedidoInactivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const pedido = await pedidos.findByIdAndUpdate(id, { estado: 0 });
    res.send(pedido);
  },

  pedidoActivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const pedido = await pedidos.findByIdAndUpdate(id, { estado: 1 });
    res.send(pedido);
  },
};
export default PedidoHttp;
