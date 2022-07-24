const mongoose = require ("mongoose");

const anajacintaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true,
    },
    nomeSocial: {
        type: String,
        required: false
    },
    dataDeNascimento: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefoneDeContato: {
        type: Number,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    
}, {timestamps: true})


const PacienteAnaJacinta = mongoose.model("anajacinta", anajacintaSchema);

module.exports = PacienteAnaJacinta;