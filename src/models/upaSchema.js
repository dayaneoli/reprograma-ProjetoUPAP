const mongoose = require ("mongoose");


const upaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
}, {timestamps: true})

const Upa = mongoose.model("upa", upaSchema);

module.exports = Upa;