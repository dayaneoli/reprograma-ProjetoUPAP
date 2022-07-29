const UpaAnaJacinta = require("../models/anajacintaSchema");

const  cadastrarPacienteUpaAnaJacinta = async (req, res) => {
    try {
        const { nome, nomeSocial, dataDeNascimento, endereco, telefoneDeContato, cpf } = req.body; 

        const novoPacienteUpaAnaJacinta = new UpaAnaJacinta ({
            nome,
            nomeSocial,
            dataDeNascimento,
            endereco,
            telefoneDeContato,
            cpf
                       
        })


        const SalvarPacienteUpaAnaJacinta = await novoPacienteUpaAnaJacinta.save();
        res.status(201).json({
            message:"Paciente cadastrado com sucesso na Upa do Ana Jacinta",
            SalvarPacienteUpaAnaJacinta   
         })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const  listarPacienteUpaAnaJacintaPorId = async (req, res) => {
    try {
        const pacienteUpaAnaJacinta = await UpaAnaJacinta.findById(req.params.id)

        if(!pacienteUpaAnaJacinta) {
            return res.status(404).json({message: "Paciente não encontrado no sistema."})
        }

        res.status(200).json({
            message: "UpaAnaJacinta:",
            pacienteUpaAnaJacinta
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const atualizarPacienteUpaAnaJacintaPorId = async (req, res) => {
    try {
        const { nome, nomeSocial, dataDeNascimento, endereco, telefoneDeContato, cpf } = req.body; 

        const pacienteUpaAnaJacinta = await UpaAnaJacinta.findById(req.params.id);

        if(!pacienteUpaAnaJacinta) {
            return res.status(404).json({message: "Paciente não encontrado no sistema."})
        }

        pacienteUpaAnaJacinta.nome = nome || pacienteUpaAnaJacinta.nome
        pacienteUpaAnaJacinta.nomeSocial = nomeSocial || pacienteUpaAnaJacinta.nomeSocial
        pacienteUpaAnaJacinta.dataDeNascimento = dataDeNascimento || pacienteUpaAnaJacinta.dataDeNascimento
        pacienteUpaAnaJacinta.endereco = endereco || pacienteUpaAnaJacinta.endereco
        pacienteUpaAnaJacinta.telefoneDeContato = telefoneDeContato || pacienteUpaAnaJacinta.telefoneDeContato
        pacienteUpaAnaJacinta.cpf = cpf || pacienteUpaAnaJacinta.cpf
    
        const atualizarPacienteUpaAnaJacinta = await pacienteUpaAnaJacinta.save();

        res.status(200).json({
            message: "Paciente atualizado com sucesso no sistema!",
            atualizarPacienteUpaAnaJacinta
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletarPacienteUpaAnaJacintaPorId = async (req, res) => {
    try {
        const pacienteUpaAnaJacinta = await UpaAnaJacinta.findById(req.params.id);

        if(!pacienteUpaAnaJacinta) {
            return res.status(404).json({message: "Paciente não encontrado no sistema."})
        }

        await pacienteUpaAnaJacinta.delete();
        res.status(200).json({message: "Paciente deletado com sucesso do sistema."})

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const listarPacientesUpaAnaJacinta = async (req, res) => {
    try {
var query = UpaAnaJacinta.find();
query.count(function (err, count) {
    if (err) console.log(err)
    else res.status(200).json({message: `Total de pacientes em atendimento na UPA Ana Jacinta: ${count}`})
});

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


module.exports = {
        cadastrarPacienteUpaAnaJacinta,
        listarPacienteUpaAnaJacintaPorId,
        atualizarPacienteUpaAnaJacintaPorId,
        deletarPacienteUpaAnaJacintaPorId,
        listarPacientesUpaAnaJacinta
    }