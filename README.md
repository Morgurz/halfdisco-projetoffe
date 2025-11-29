📽️ Catálogo de Filmes e Séries — Projeto FFE

Este é um projeto desenvolvido para a disciplina Front-End Frameworks (FFE).
O objetivo é criar uma aplicação web utilizando React + TypeScript, com componentização, hooks, roteamento e integração com dados.

🚀 Tecnologias Utilizadas

React.js (com TypeScript)

React Router DOM

Hooks (useState, useEffect, etc.)

CSS Modules

Componentização

Dados estáticos em arquivos .ts

📦 Como instalar o projeto
1️⃣ Clonar o repositório

Se você ainda não clonou:

git clone https://github.com/Morgurz/halfdisco-projetoffe.git


Entre na pasta do projeto:

cd halfdisco-projetoffe

2️⃣ Instalar dependências
npm install


Isso instala tudo que o projeto precisa (React, Router, Typescript, etc).

▶️ Como executar o projeto

Depois de instalar tudo, rodar localmente é simples:

npm start


A aplicação vai abrir automaticamente em:

http://localhost:3000

🧭 Como usar a aplicação

A aplicação possui:

✔ Tela de Login

O usuário insere email e senha.

O sistema valida o email.

Apenas simulação.

✔ Página de Filmes

Lista de filmes usando componentes funcionais.

Cada filme aparece em um Card com imagem, título, diretor e ano.

✔ Página de Séries

Parecida com Filmes, mas com dados de séries.

✔ Favoritos

O usuário pode adicionar filmes e séries aos favoritos.

Cada card possui um botão para favoritar ou remover dos favoritos.

✔ Páginas adicionais

Listas, Header, Footer e outros componentes obrigatórios do trabalho.

🧱 Estrutura Simplificada do Projeto
src/
 ├── assets/
 │     └── img/          # imagens do projeto
 ├── components/
 │     ├── Header.tsx
 │     ├── Footer.tsx
 │     ├── CardFilme.tsx
 │     ├── CardSerie.tsx
 │     └── Button.tsx
 ├── pages/
 │     ├── Login.tsx
 │     ├── Filmes.tsx
 │     ├── Serie.tsx
 │     ├── Favoritos.tsx
 │     ├── Contato.tsx    
 ├── data/
 │     ├── filmes.ts
 │     └── serie.ts
 ├── App.tsx
 └── index.tsx

📝 Observações Técnicas

Projeto feito com componentização total.

Utiliza hooks como useState e useEffect.

Usa roteamento para navegação entre páginas.

Trabalha com dados estáticos em arquivos .ts.