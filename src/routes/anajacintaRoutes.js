const express = require("express");
const router = express.Router();
const anajacintaController = require("../controller/anajacinta");


router.post("/cadastrar/anajacinta", anajacintaController.cadastrarPacienteUpaAnaJacinta);
router.get("/listar/anajacinta", anajacintaController.listarPacientesUpaAnaJacinta);
router.get("/listar/anajacinta/:id", anajacintaController.listarPacienteUpaAnaJacintaPorId);
router.put("/atualizar/anajacinta/:id", anajacintaController.atualizarPacienteUpaAnaJacintaPorId);
router.delete("/deletar/anajacinta/:id", anajacintaController.deletarPacienteUpaAnaJacintaPorId);


module.exports = router;
