import mongoose from "mongoose"

const MunicipiosSchema = mongoose.Schema({
    municipio: {
        type: String,
        required: true
    }
});

export const Municipios = mongoose.model("Municipios", MunicipiosSchema); 