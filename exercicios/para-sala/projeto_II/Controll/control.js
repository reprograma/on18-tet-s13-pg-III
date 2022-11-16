const { modules } = require('../app.js')
const db=require('../Database/database')

const cozinhasCadastradas=async(req,res)=>{
  const {id}=req.body

  const banco=await db()

  const idBanco=banco.id

  const idEncontrado=idBanco.find(idBuscado=> idBuscado==id)

  try{
        if(idEncontrado==id){
      console.log('encontrei o id')
      res.status(200).send(idEncontrado)
  }  
  }
  catch(error){
      res.status(500).json({message:error})
  }
}

// const banco= await db()

// const{nome, cnpj, telefone, iniciativa_privada, endereco, bairros_atuantes, site, atividades_disponiveis, pessoa_responsav}=req.body

// const busca=banco.find({cnpj});

// if(busca==cnpj){
//     return res.status(200).json({message:'Cnpj existente'})
// }
// res.sent({message:banco})


module.exports={cozinhasCadastradas}