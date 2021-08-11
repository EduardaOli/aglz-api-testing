# aglz-api-testing

Desafio 4 - Projeto Chapter 4 aglz-api-testing - Bootcamp Cypress - Turma 6

Desafio:
* Criar novos testes para api de treinamento 
* Subir o projeto para o github
* Implementar a integração contínua usando o GhActions

Passos para executar o projeto:
Tecnologias: 

* Cypress @ 5.3.0
* NodeJS @ v14.17.3
* NPM @ 7.19.1

Plugins:

* cypress-select-tests
* cypress-grep
* cy-spok

Validação dos Testes:
* Tentar alterar uma reserva inexistente -> 405
* Tentar alterar uma reserva sem token -> 403
* Alterar uma reserva com sucesso- > 200
* Excluir uma reserva com sucesso -> 201

Itens do desafio:
* Tentar alterar uma reserva com token invalido -> 403
* Tentar excluir uma reserva inexistente -> 405
* Tentar excluir uma reserva sem token -> 403
* Tentar excluir uma reserva com token invalido -> 403

Passos para executar o projeto: 
* Clonar o repositório
* Dentro da raiz do projeto, executar o comando [npm install]
* Executar os comandos a seguir para rodar os testes em modo headless nos navegadores:
    * Teste Healthcheck: [npm run test:healthcheck]
    * Teste de Contrato: [npm run test:contract]
    * Testes Funcionais: [npm run test:functional]
    
A seguir segue gif com testes executados em modo headless via console do VScode para melhor entendimento dos comandos.

![Alt Text](https://i.picasion.com/pic91/796188c48934f21328a2eaad80f39754.gif)

