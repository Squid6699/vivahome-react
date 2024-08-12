import mongoose, { mongo } from "mongoose";

const ContratoSchema = mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    idCita: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cita',
        unique: true,
        required: true
    }
})

export const Contrato = mongoose.model("Contrato", ContratoSchema);
