# Encurtador de URL 
## Projeto DIO - Eduzz Fullstack  

***Libs utilidas***
- Mongo DB
- Typescript
- express
- mongoose
- shortid
- @typegoose/typegoose
- dotenv
## Descrição
Projeto realizado para desafio DIO Eduzz Fullstack em Node js com Typescrip, trata-se de uma API para encurtamento de URLs, utlizando  express, possui três endpoints, um GET que lista todas as urls cadasatradas, um POST que cadastra uma url e gerar um URL curta, e um GET que redireciona a URL curta para a original. É possível contar quantos cliques cada URL encurtada recebel.

## Para utilizar esta API
Faça clone,  entre na pasta raiz e faça um npm install, adicione uma URL de conexão do mongodb no .env na variável "MONGO_CONNECTION".

## Endpoints

* GET /v1/urls
* POST /v1/urls
* GET /v1/urls/:hash

## Links úteis

- [Typescript](https://www.typescriptlang.org/) 
- [Mongo DB](https://www.mongodb.com/) 


