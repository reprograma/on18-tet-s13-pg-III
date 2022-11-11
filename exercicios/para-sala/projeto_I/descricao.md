# Projeto I: Projeto: Ler é saber

O projeto é um sistema de cadastro de bibliotecas que existem em cada região. O objetivo do projeto é incentivar as pessoas a lerem e estimular as crianças a criarem hábitos de leitura, procurando Bibliotecas comunitárias próximas de sua casa.

A empresa Ler é saber tem espaços amplos, seguindo todos os protocolos de saúde, para as pessoas irem ler e se sentirem confortáveis naquele espaço. Contam com atividades como contação de histórias, saraus e doações de livros.

Requisitos para endpoint:
 GET "/biblioteca" Deverá retornar todas as bibliotecas cadastradas.

 GET "/biblioteca/[id] Deverá retornar a biblioteca com o id informado.

 POST "/biblioteca" Deverá criar uma biblioteca

 DELETE "/biblioteca/[id]" Deverá deletar uma biblioteca por id específico e retorna mensagem;

 PATCH "/biblioteca/[id]" Deverá alterar informação específica por id específico e retorna o cadastro atualizado;

Regras de negócio:
 Não poderá existir bibliotecas com o mesmo cnpj;
 Não poderá existir bibliotecas com o mesmo nome no mesmo bairro;

Dados para Collection Biblioteca
_id: autogerado e obrigatório;
nome: texto e obrigatório;
cnpj: string e obrigatorio;
telefone: string;
É uma iniciativa privada? : Boolean
endereco: objeto com:
    cep: string e obrigatório,
    rua: string e obrigatório,
    numero: number e obrigatório,
    complemento: string e opcional,
    referencia: string e opcional,
    estado: string e obrigatório,
    cidade: string e obrigatório,
    bairro: string e obrigatório;
bairros que atuam: array;
site: texto e não obrigatório;
atividades disponíveis: array;
Pessoa responsável pela biblioteca: string e obrigatório;