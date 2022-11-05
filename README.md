<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online on18 - Todas em Tech  | Back-end | Semana 13 | 2022 | Professora Jéssica Osko

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* [Add outras intrucoes caso necessario]

### Resumo
O que veremos na aula de hoje?
* [Revisão](#tema1)
* [Consultoria Tech](#tema2)
* [Tema3](#tema3)

## Revisão

### `1. Por que precisamos de um banco de dados?`

Vantagens: 
* Facilidade de acesso
* Análises e comparativos
* Segurança de dados
* Atualizações e aprimoramento das informações
* Escalabilidade 

<br>
<br>

#### `2. NoSQL v/s SQL`

| NoSQL | SQL |
| --- | --- |
| `Surgiu no final dos anos 90 e como uma alternativa de natureza não relacional` | RDBMS ou Sistema de Gerenciamento de Banco de Dados Relacional, armazenam dados em um formato estruturado, usando linhas, colunas e tabelas |
| `Possuem alta escalabilidade e desempenho` | Geralmente demanda distribuição vertical de servidores, o que gera mais custo, pois quanto mais dados, mais memória e mais disco um servidor precisa. |
| `Alguns tipos de bancos de dados não relacional: armazenamento de chave-valor, armazenamento column family, orientado a grafos e orientado a documentos` | Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional.|

Aqui está um comparativo dos termos MongoDb e SQL:

| MongoDB | SQL |
| --- | --- |
| `database` | database|
| `collection` | table|
| `document` | row|
| `field` | column|
| `lookup` | table joins|


<br>
<br>

#### `3. O que é MongoDB?`
Um banco de dados não relacional, orientado a documentos, livre com o código aberto e multiplataforma. Ele foi escrito na linguagem C++.

No MongoDB, os conjuntos de dados forma uma collection, cada item forma um documento e dentro dos documentos temos os campos.

Os dados são armazenados no formato JSON, o que é uma grande facilidade para quem programa com Javascript.

Podemos usá-lo pelo serviço de nuvem(cloud) ou localmente fazendo o download para nossa máquina (vamos usar essa opção).

Além disso, o Mongo possui seu driver com suas próprias queries(comandos para interação com o banco que se assemelham muito com javascript com orientação a objeto), podemos também usar uma interface gráfica e ainda podemos usar um ODM(vamos usar a última opção).

#### `4. Quem usa MongoDB?`
Mais de 22.600 clientes no mundo usam MongoDB. Algumas delas: Google, Forbes, eBay, Toyota, SAP, Adobe e muitas outras.

#### `5. Operações de CRUD`
O CRUD é um acrônimo para Create, Read, Update e Delete(criação, consulta, atualização e remoção de dados) . São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose essas funcionalidades são:


| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| `C`REATE | insertOne() | save() |
| `R`EAD | find() | find() |
| `U`PDATE | updateOne() | save() |
| `D`ELETE | deleteOne() | remove() |

Para conhecer todas as operações MongoDb: 
https://docs.mongodb.com/manual/crud/

#### `6. O que é odm?`
Uma ferramenta que mapeia entre um Modelo de Objeto e um Banco de Dados de Documentos.

#### `7. Mongoose`

Mongoose é uma modelagem de objeto mongodb elegante para node.js.

Tudo no Mongoose começa com um Schema. Cada esquema é mapa para uma coleção MongoDB e define a forma dos documentos dentro dessa coleção.

Exemplo photoshop x Filtro do Instagram

#### `8. Conceito de Model (Schema)`
Nosso mongoose utiliza a `Schema` para pôr ordem na ' bagunça ', afinal como podemos salvar qualquer coisa, de qualquer jeito, seria uma loucura não?  Para isso precisamos de um schema( espelho ) de como será salvo nosso `document`.

Além disso, nos permite fazer o relacionamento de dados entre os collections diferentes.

exemplo de schema:

```javascript
const mongoose = require('mongoose');

const Paciente = monogoose.Schema({
    nome: String,
    plano_saude_numero: Number
});

```

#### `9. Passos para conectar o MongoDb usando mongoose:`

1 - Crio minha configuracao de conexao no database, passando informacoes padrão e a minha string de conexão
2 - Crio meu schema no model
3 - requiro no app e chamo a função de conexão


## [extra: 01] Dotenv - variaves de ambiente

Essa dica com certeza dará mais maturidade aos seus códigos de backend.
Afinal de contas dotenv é uma excelente ferramenta para gerenciar os dados sensíveis de desenvolvimento que não devem ser compartilhados como: chaves de API’s, informações do banco de dados, entre outras.

Vem aprender como orquestrar suas variáveis do ambiente dev em apenas 4 passos:

```
1- No seu projeto node com express, instale como dependência de desenvolvimento o dotenv. Utilize yarn ou npm.

yarn add dotenv -D
npm I —save-dev dotenv

2- Crie o arquivo .env

E nele crie suas chaves e valores que contém informações sensíveis e não podem ser compartilhadas além do ambiente de dev.

Por padrão as chaves são maiúsculas e não podem conter espaço, os valores ficam após o igual e podem ser de qualquer tipo pois retornarão sempre uma string:

NOME_DA_CHAVE=valor

3- Execute o ‘dotenv’, importando, usando a função config e incluindo ao processo para ler as variáveis configuradas:

require(‘dotenv’).config( )
process.env.NOME_DA_CHAVE

4- Como boa prática lembre-se de incluir seu arquivo .env no .gitignore

Você pode criar um .env.example e deixar apenas as chaves genéricas
```
## [extra: 02] Classes | POO (orientação a objetos) Conceitos básicos
Uma breve introdução sobre classes e objetos, para que possamos entender melhor o  nosso ORM.

###  uso da palavra reservada `new`
Quando possuímos uma classe, podemos utilizar a palavra reservada `new`  para instanciar um objeto, ou seja, construir um novo documento a partir da classe( nossa `Schema` ),  afinal, não queremos que um Pikachu, se transforme num Charmander.

```javascript
const paciente = new Model({
    nome: 'Jéssica'  
});

```

### Métodos
Como mencionamos em aulas passadas, assim como o objeto, as classes possuiem métodos, que são funções que nos auxiliam a realizar **ações** como por exemplo: salvar um pokemon, ou um ataque especial como shock do trovao, no nosso dia-a-dia usamos o console`.log`, *.log("hello word")* é um método que nos permite imprimir no terminal uma mensagem de texto.

#### Métodos relação com a nossa API

| OPERAÇÃO | MONGODB | MOOGOSE | DESCRIÇÃO | HttpCode
| ---------- | -------------- | ---------------- | ----------------- | ---- |
| **C**REATE | **db**.insertOne() | new **MusicModel**() | cria um documento | 201 |
| **R**EAD | **db**.find() |  **MusicModel**.find() | ler um documento | 200 |
| **U**PDATE | **db**.updateOne() | **MusicModel**.updateOne() | atualiza um documento | 200 |
| **D**ELETE | **db**.deleteOne() | **MusicModel**.deleteOne() | deleta um documento | 200 ou 204


### Constructor
Nosso `constructor` é responsável por inicializar a nossa classe, ele recebe os parametros para criar construir a instancia da classe, como por exemplo, nossa música, é assim que nossa Schema gera a música no formato que o banco espera, no caso do mongo, um BJSON.

### Tipagem - Tipos primários
Na programação, existem tipos primários, que são responsáveis por definir o tipo de informação ( dado ) que estamos trabalhando, por exemplo um número de celular `Number`, ou um email que é texto `String`, ou até mesmo se é verdadeiro(true) ou falso(false) que é um `Boolean`, além disso, temos o `Date` que representa uma data. 

 - String -> representa *texto* -> `""`
 - Number -> representa *número*  `0`
 - Boolean -> representa `true` ou `false`
 - Date -> representa uma data, por exemplo, 1970-01-13 -> `Date`

```typescript
    name: String,
    avaliable: Boolean,
    birthdate: Date,
    abilities: [String],
    attributes: {
      hp: Number,
      attack: Number,
      defense: Number,
    }
```


```javascript
 // "Relacionamento" no MongoDB? Como é isso?

coach { // 'coach' nome da key 'chave' da schema
  type: mongoose.Schema.Types.ObjectId, // id de referencia,
  ref: 'coach' // colection de referencia
}

```

## Sobre o Projeto

A Consultora Tech, é a maior empresa de consultoria da América Latina! O seu foco é trazer soluções para as empresas que buscam seriedade e agilidade durante a produção dos seus sistemas. 

Com o crescimento da demanada, a consultora contratou a turma on18 para desenvolver os novos projetos com as tecnologias que atualmente estamos utilizando.

O objetivo é entregarmos os projetos de acordo com os requisitos em cada projeto.

<br>
<br>

## 📁 Arquitetura MVC

```
 📁 Projeto
   |
   |-  📁 src
   |    |
        |- 📁 📄 app.js
   |    |- 📁 database
   |         |- 📄 moogoseConnect.js
   |
   |    |- 📁 controllers
   |         |- 📄 nomeController.js
   |
   |    |- 📁 models
   |         |- 📄 nomeModel.js
   |
   |    |- 📁 routes
   |         |- 📄 nomeRoutes.js 
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

# Contrato da API

### Requisitos 
- [ ] GET "**/xxxx**" Deverá retornar todos os cadastrados.
- [ ] GET **"/xxxx/[id]** Deverá retornar o valor com o id informado.

- [ ] POST   "**/xxx**" Deverá criar 

- [ ] DELETE   "/xxxx/[ID]" Deverá deletar um registro por id específico e retorna mensagem

- [ ] PATCH  "/xxxx/[ID]" Deverá alterar informação específica por id específico e retorna o cadastro atualizado

### Combinados

- [ ]  Em cada projeto, terão as suas regras de negócio e os requisitos mais detalhados. 


<br>
<br>

## Projetos

* [Projeto I](https://github.com/reprograma/on18-tet-s13-pg-III/material/../../../../../material/projetos/projeto_I/)
* [Projeto II](https://github.com/reprograma/on18-tet-s13-pg-III/material/../../../../../material/projetos/projeto_II/)


<br>
<br>

### Links Úteis

## 📖 Referências
- https://www.gartner.com/en/information-technology/glossary/object-data-model
- https://medium.com/tkssharma/node-js-with-mongoose-odm-9697c09665df
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose
- https://docs.mongodb.com/
- https://docs.mongodb.com/manual/crud/
- https://docs.atlas.mongodb.com/tutorial/create-new-cluster/
- https://studio3t.com/academy/topic/mongodb-vs-sql-concepts/
- https://dzone.com/articles/sql-vs-nosql
- https://mongoosejs.com/docs/index.html

### 🎥 Videos de apoio

- [Resumo Mongodb - Codigo Fonte TV](https://www.youtube.com/watch?v=4dTI1mVLX3I)
- [nodeJs Express Mongo - Api rest full Turitorial](https://www.youtube.com/watch?v=K5QaTfE5ylk)
- [O que é banco de dados? - Curso em Video](https://www.youtube.com/watch?v=Ofktsne-utM)


<p align="center">
Desenvolvido com :purple_heart:  
</p>

