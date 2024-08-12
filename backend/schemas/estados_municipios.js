import mongoose from "mongoose"

const Estados_municipiosSchema = mongoose.Schema({
    estadoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estado',
        required: true
    },
    municipioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Municipio',
        required: true
    }
});

export const Estados_Municipios = mongoose.model("Estados_Municipios", Estados_municipiosSchema);