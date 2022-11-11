[GET] "/cozinha/buscar" 
200: retorna todas as cozinhas cadastradas.
404: Not Found (nenhum resultado para essa busca)

[GET] "/cozinha/buscar/:id 
parametro: id
200: retornar a cozinha com o id informado
404: bad request (nenhuma cozinha encontrada para esse id)

[POST] "/cozinha/cadastrar" 
201: cadastra uma nova cozinha
400: Bad Request (campo obrigatório)
409: conflito (cnpj já existe)

[DELETE] "/cozinha/deletar/:id"
parametro: id
200: deletar uma cozinha por id específico
400: Bad request

[PATCH] "/cozinha/atualizar/:id" 
parametro: id
204: alterar informação específica por id específico 