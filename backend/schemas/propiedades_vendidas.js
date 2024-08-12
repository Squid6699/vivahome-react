import mongoose, { mongo } from "mongoose"

const Propiedades_VendaidasSchema = mongoose.Schema({
    idPropiedad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Propiedad',
        required: true
    },
    idComprador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    idVendedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendedor',
        required: true
    },
    idContrato: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContratoCompra',
        required: true
    },
    precio: {
        type: Schema.Types.Decimal128,
        required: true
    }
});

const Propiedades_Vendaidas = mongoose.model("Propiedades_Vendaidas", Propiedades_VendaidasSchema);