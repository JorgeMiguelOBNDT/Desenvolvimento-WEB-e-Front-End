# Sistema de Cadastro com Login Google

Este projeto consiste em uma aplicação web desenvolvida com o objetivo de permitir a autenticação de usuários utilizando conta Google e a realização de um cadastro complementar com persistência de dados no navegador. Ao acessar o sistema, o usuário pode realizar login com sua conta Google, tendo seu nome e e-mail automaticamente preenchidos no formulário. Em seguida, ele pode inserir informações adicionais, como telefone e matrícula, finalizando o cadastro.

Após a finalização, o sistema gera um objeto no formato JSON contendo os dados informados pelo usuário, exibindo-o na tela de forma estruturada. Além disso, os dados são armazenados localmente utilizando o localStorage, permitindo que as informações permaneçam disponíveis mesmo após a atualização da página.

O desenvolvimento da aplicação foi realizado utilizando tecnologias modernas de front-end. A interface foi construída com React, utilizando TypeScript para garantir tipagem estática e maior segurança no desenvolvimento. O projeto foi configurado com Vite, proporcionando um ambiente rápido e eficiente durante a execução. Para autenticação, foi utilizada a biblioteca @react-oauth/google, juntamente com jwt-decode para manipulação das informações do usuário. A estilização foi feita com CSS Modules, garantindo isolamento de estilos e melhor organização do código.

O projeto foi desenvolvido pelos alunos:
- Luccas Rodrigues Moreira dos Reis - 20242000047
- Jorge Miguel de Oliveira Benedito - 20242000063

Para executar o projeto localmente, é necessário inicialmente realizar o download ou clone do repositório. Após isso, deve-se acessar a pasta do projeto através do terminal e instalar todas as dependências utilizando o gerenciador de pacotes npm com o comando `npm install`. Em seguida, é necessário criar um arquivo chamado `.env` na raiz do projeto, onde será configurada a variável de ambiente responsável pela chave de autenticação do Google, no formato `VITE_GOOGLE_CLIENT_ID=seu_client_id_aqui`. 

Com as dependências instaladas e o arquivo de configuração criado, o projeto pode ser executado utilizando o comando `npm run dev`. Após a execução, a aplicação estará disponível no navegador através do endereço `http://localhost:5173`, onde já será possível realizar o login, preencher o formulário e testar todas as funcionalidades implementadas.

A aplicação também pode ser acessada em ambiente de produção através do seguinte link:
