import mongoose from "mongoose"

const UsuariosSchema = mongoose.Schema({
    nombreCompleto: String,
    correo: {
        type: String,
        unique: true
    },
    contrasena: String,
    telefono: String,
    nivel: {
        type: Number,
        default: 3
    }
}, { versionKey: false });

export const Usuario = mongoose.model('Usuario', UsuariosSchema);
