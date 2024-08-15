import mongoose from "mongoose"

const PropiedadesSchema = mongoose.Schema({
    direccion: {
        type: String,
        required: true
    },
    nAutos: {
        type: Number,
        default: 0
    },
    nBanos: {
        type: Number,
        default: 0
    },
    nRecamaras: {
        type: Number,
        default: 0
    },
    nEscaleras: {
        type: Number,
        default: 0
    },
    tipo: String,
    metros: {
        type: String,
        default: '0'
    },
    precio: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0.00
    },
    descripcion: {
        type: String,
        required: true
    },
    fotoPrincipal: String, // URL o base64
    fotos: [String], // Array de URLs o base64
    fechaPublicacion: Date,
    autorizada: {
        type: Boolean,
        default: false
    },
    disponible: {
        type: String,
        default: 'NO DISPONIBLE'
    },
    ayudaVendedor: {
        type: Boolean,
        default: false
    },
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
}, { versionKey: false });

export const Propiedades = mongoose.model("Propiedades", PropiedadesSchema);