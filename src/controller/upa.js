const Upa = require("../models/upaSchema");


const cadastrarUpa = async (req, res) => {
    try {
        const { nome, endereco, telefone } = req.body; //tem que ser igual do modelo odo banco de dados (autor - models)

        const novaUpa = new Upa ({
            nome,
            endereco,
            telefone
            
        })

        const upaExiste = await Upa.findOne({nome: req.body.nome}) //verificação de usuário por e-mail que é um dado que não se repete, como o CPF por exemplo
        if(upaExiste) {
            return res.status(400).json({
                error: "Upa já cadastrada no sistema"
            })
        }
    
        const SalvarUpa = await novaUpa.save();
        res.status(201).json({
            message:"Upa cadastrada com sucesso",
            SalvarUpa
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const  listarUpas = async (req, res) => {
    try {
        const upa = await Upa.find();
        res.status(200).json({
            message: "Lista das upas da cidade Presidente Prudente / SP",
            upa
        })
        if(upas.length == 0) {
            return res.status(404).json({
                message: "Nenhuma upa encontrada no sistema" 
            })
        }

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const  listarUpaPorId = async (req, res) => {
    try {
        const upa = await Upa.findById(req.params.id)

        if(!upa) {
            return res.status(404).json({message: "Upa não encontrada."})
        }

        res.status(200).json({
            message: "Upa:",
            upa
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const atualizarUpaPorId = async (req, res) => {
    try {
        const { nome, endereco, telefone } = req.body;
        const upa = await Upa.findById(req.params.id);

        if(!upa) {
            return res.status(404).json({message: "Upa não encontrada."})
        }

        upa.nome = nome || upa.nome
        upa.endereco = endereco || upa.endereco
        upa.telefone = telefone || upa.telefone

        const atualizarUpa = await upa.save();

        res.status(200).json({
            message: "Upa atualizada com sucesso!",
            atualizarUpa
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletarUpaPorId = async (req, res) => {
    try {
        const upa = await Upa.findById(req.params.id);

        if(!upa) {
            return res.status(404).json({message: "Upa não encontrada no sistema."})
        }

        await upa.delete();
        res.status(200).json({message: "Upa deletada com sucesso."})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
        cadastrarUpa,
        listarUpas,
        listarUpaPorId,
        atualizarUpaPorId,
        deletarUpaPorId
} 