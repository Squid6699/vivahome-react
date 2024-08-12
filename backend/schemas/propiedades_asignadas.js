import mongoose from "mongoose"

const Propiedades_AsiganadasSchema = mongoose.Schema({
    idPropiedad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Propiedad',
        required: true
    },
    idVendedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendedor',
        default: null
    },
    idCita: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cita',
        default: null
    }
})

export const Propiedades_Asiganadas = mongoose.model("Propiedades_Asiganadas", Propiedades_AsiganadasSchema);

