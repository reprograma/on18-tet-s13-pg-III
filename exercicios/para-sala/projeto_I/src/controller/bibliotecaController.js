const BibliotecaSchema = require("../models/BibliotecaSchema");

const criarBiblioteca = async (req, res) => {
    const {
        id,
        nome,
        cnpj,
        telefone,
        iniciativa_privada,
        endereco,
        bairros, 
        site, 
        atividades, 
        responsavel} = request.body
    
    try {
        const biblioteca = new BibliotecaSchema({
            _id: id,
        
        })
    } catch (error) {
        
    }
}

// //
// - _id: autogerado e obrigatório;
// - nome: texto e obrigatório;
// - cnpj: string e obrigatorio;
// - telefone: string;
// - É uma iniciativa privada? : Boolean
// - endereco: objeto com: 
//   - cep: string e obrigatório, 
//   - rua: string e obrigatório, 
//   - numero: number e obrigatório, 
//   - complemento: string e opcional, 
//   - referencia: string e opcional, 
//   - estado: string e obrigatório, 
//   - cidade: string e obrigatório, 
//   - bairro: string e obrigatório;
// - bairros que atuam: array;
// - site: texto e não obrigatório;
// - atividades disponíveis: array;
// - Pessoa responsável pela biblioteca: string e obrigatório;