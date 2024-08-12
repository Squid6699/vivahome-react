import mongoose from "mongoose"

const VendedoresSchema = mongoose.Schema({
    nombreCompleto: String,
    correo: String,
    fotos: {
      type: String,
      default: 'default.jpg'
    },
    idUsuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      default: null
    }
});

export const Vendedores = mongoose.model('Vendedores', VendedoresSchema);
