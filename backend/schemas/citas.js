import mongoose from "mongoose";

const citasSchema = mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true
    },
    correo: {
      type: String,
      required: true
    },
    telefono: String,
    fecha: {
      type: Date,
      required: true
    },
    estado: {
      type: String,
      default: 'SIN CONFIRMAR'
    },
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
      default: null
    }
})

export const Cita = mongoose.model("Cita", citasSchema);