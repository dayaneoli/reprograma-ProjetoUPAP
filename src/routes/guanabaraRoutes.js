const express = require("express");
const router = express.Router();
const guanabaraController = require("../controller/guanabara");


router.post("/cadastrar/guanabara", guanabaraController.cadastrarPacienteUpaGuanabara);
router.get("/listar/guanabara/:id", guanabaraController.listarPacienteUpaGuanabaraPorId);
router.get("/listar/guanabara", guanabaraController.listarPacientesUpaGuanabara);  //get all contador
router.put("/atualizar/guanabara/:id", guanabaraController.atualizarPacienteUpaGuanabaraPorId);
router.delete("/deletar/guanabara/:id", guanabaraController.deletarPacienteUpaGuanabaraPorId);


module.exports = router;




