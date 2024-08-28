const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

// Criar um novo aluno
router.post('/alunos', async (req, res) => {
const { nome, matricula } = req.body;
const newAluno =
});

// Obter todos os alunos
router.get('/alunos', async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.status(200).send(alunos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Obter um aluno por ID
router.get('/alunos/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findById(req.params.id);
        if (!aluno) {
            return res.status(404).send({ error: 'Aluno não encontrado' });
        }
        res.status(200).send(aluno);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Atualizar um aluno por ID
router.put('/alunos/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!aluno) {
            return res.status(404).send({ error: 'Aluno não encontrado' });
        }
        res.status(200).send(aluno);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Deletar um aluno por ID
router.delete('/alunos/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndDelete(req.params.id);
        if (!aluno) {
            return res.status(404).send({ error: 'Aluno não encontrado' });
        }
        res.status(200).send({ message: 'Aluno deletado com sucesso' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
