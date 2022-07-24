const express = require("express");
const router = express.Router();
const upaController = require("../controller/upa");


router.post("/cadastrar",upaController.cadastrarUpa);
router.get("/listar",upaController.listarUpas);
router.get("/listar/:id",upaController.listarUpaPorId);
router.put("/atualizar/:id",upaController.atualizarUpaPorId);
router.delete("/deletar/:id",upaController.deletarUpaPorId);


module.exports = router;
