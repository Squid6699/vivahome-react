import mongoose from "mongoose";

const EstadosSchema = mongoose.Schema({
    estado: {
        type: String,
        required: true
    }
})

export const Estados = mongoose.model("Estados", EstadosSchema);