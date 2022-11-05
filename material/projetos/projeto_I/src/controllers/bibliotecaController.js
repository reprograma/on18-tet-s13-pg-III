const mongoose = require('mongoose');

const pacienteSchema = require("../models/BibliotecaModel");

const criarBiblioteca = async(requisicao, resposta) => {
    const {nome, cnpj ,telefone, iniciativa_privada, endereco, cep, rua, numero, completmento,referencia, estado,cidade, bairro,bairros_atuante,site,atividades} = requisicao.body;
    try{
        const paciente = new pacienteSchema({
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            plano_saude: plano_saude,
            plano_saude_numero: plano_saude_numero
        })
        const salvarPaciente = await paciente.save();
        resposta.status(201).json({
            paciente: salvarPaciente
        })

    }catch(error){
        resposta.status(400).json({
            message: error.message
        })
    }
}
