const mongoose = require ('mongoose');

const compaintSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true

    },
    matricula: {
        type: String,
        required: true
    },
    creaetedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Aluno', alunoSchema);