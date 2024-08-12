import mongoose from "mongoose"

const UsuariosSchema = mongoose.Schema({
    nombreCompleto: String,
    correo: String,
    contrasena: String,
    telefono: String,
    nivel: {
        type: Number,
        default: 3
    }
});

export const Usuario = mongoose.model('Usuario', UsuariosSchema);
