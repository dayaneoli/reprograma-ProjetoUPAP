const UpaGuanabara = require("../models/guanabaraSchema");

const  cadastrarPacienteUpaGuanabara = async (req, res) => {
    try {
        const { nome, nomeSocial, dataDeNascimento, endereco, telefoneDeContato, cpf } = req.body; 

        const novoPacienteUpaGuanabara = new UpaGuanabara ({
            nome,
            nomeSocial,
            dataDeNascimento,
            endereco,
            telefoneDeContato,
            cpf
                       
        })

//-------------------------------------------------------------------------------
// DÚVIDA: Se o paciente já tem cadastro e vai para ser atendido novamente
//1) ele precisa ser colocado na contagem do dia
//2) ele precisa ser recadastrado novamente
        // const pacienteExiste = await UpaGuanabara.findOne({cpf: req.body.cpf}) 
        // if(pacienteExiste) {
        //     return res.status(400).json({
        //         error: "Paciente será recadastrado no sistema para contagem diária"
        //     })
        // }
//-------------------------------------------------------------------------------

        const SalvarPacienteUpaGuanabara = await novoPacienteUpaGuanabara.save();
        res.status(201).json({
            message:"Paciente cadastrado com sucesso na Upa do Guanabara",
            SalvarPacienteUpaGuanabara   
         })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const  listarPacienteUpaGuanabaraPorId = async (req, res) => {
    try {
        const pacienteUpaGuanabara = await UpaGuanabara.findById(req.params.id)

        if(!pacienteUpaGuanabara) {
            return res.status(404).json({message: "Paciente não encontrado no sistema."})
        }

        res.status(200).json({
            message: "UpaGuanabara:",
            pacienteUpaGuanabara
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const atualizarPacienteUpaGuanabaraPorId = async (req, res) => {
    try {
        const { nome, nomeSocial, dataDeNascimento, endereco, telefoneDeContato, cpf } = req.body; 

        const pacienteUpaGuanabara = await UpaGuanabara.findById(req.params.id);

        if(!pacienteUpaGuanabara) {
            return res.status(404).json({message: "Paciente não encontrado no sistema."})
        }

        pacienteUpaGuanabara.nome = nome || pacienteUpaGuanabara.nome
        pacienteUpaGuanabara.nomeSocial = nomeSocial || pacienteUpaGuanabara.nomeSocial
        pacienteUpaGuanabara.dataDeNascimento = dataDeNascimento || pacienteUpaGuanabara.dataDeNascimento
        pacienteUpaGuanabara.endereco = endereco || pacienteUpaGuanabara.endereco
        pacienteUpaGuanabara.telefoneDeContato = telefoneDeContato || pacienteUpaGuanabara.telefoneDeContato
        pacienteUpaGuanabara.cpf = cpf || pacienteUpaGuanabara.cpf
       
        const atualizarPacienteUpaGuanabara = await pacienteUpaGuanabara.save();

        res.status(200).json({
            message: "Paciente atualizado com sucesso no sistema!",
            atualizarPacienteUpaGuanabara
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletarPacienteUpaGuanabaraPorId = async (req, res) => {
    try {
        const pacienteUpaGuanabara = await UpaGuanabara.findById(req.params.id);

        if(!pacienteUpaGuanabara) {
            return res.status(404).json({message: "Paciente não encontrado no sistema."})
        }

        await pacienteUpaGuanabara.delete();
        res.status(200).json({message: "Paciente deletado com sucesso do sistema."})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const listarPacientesUpaGuanabara = async (req, res) => {
    try {
var query = UpaGuanabara.find();
query.count(function (err, count) {
    if (err) console.log(err)
    // else console.log("pacientes", count)
    else res.status(200).json({message: `Total de pacientes em atendimento na UPA Guanabara: ${count}`})
});


    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


module.exports = {
        cadastrarPacienteUpaGuanabara,
        listarPacienteUpaGuanabaraPorId,
        atualizarPacienteUpaGuanabaraPorId,
        deletarPacienteUpaGuanabaraPorId,
        listarPacientesUpaGuanabara
    }


    