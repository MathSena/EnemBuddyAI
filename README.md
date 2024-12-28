# EnemBuddyAI

EnemBuddyAI é uma aplicação web que ajuda os estudantes a se prepararem para o ENEM, gerando tópicos de estudo organizados em níveis de aprendizado. A aplicação utiliza a API do OpenAI para gerar os tópicos de estudo.

## Funcionalidades

- Geração de tópicos de estudo organizados em níveis de aprendizado (básico, intermediário e avançado).
- Interface amigável para entrada de tópicos de estudo.
- Opção para baixar os tópicos gerados em formato PDF.
- Limitação de requisições para evitar abuso da API.
- Documentação da API com Swagger.

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- TypeScript
- OpenAI API
- Swagger
- Rate Limiting

### Frontend
- React
- TypeScript
- Tailwind CSS
- Material UI
- Semantic UI React
- jsPDF

## Instalação

### Pré-requisitos
- Node.js
- npm ou yarn

### Passos para Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/EnemBuddyAI.git
   cd EnemBuddyAI
   ```

2. Instale as dependências do backend:
   ```sh
   cd backend
   npm install
   # ou
   yarn install
   ```

3. Instale as dependências do frontend:
   ```sh
   cd ../frontend
   npm install
   # ou
   yarn install
   ```

4. Crie um arquivo `.env` no diretório `backend` com as seguintes variáveis:
   ```env
   OPENAI_API_KEY=your-api-key
   PORT=5000
   ```

5. Inicie o servidor backend:
   ```sh
   cd backend
   npm start
   # ou
   yarn start
   ```

6. Inicie o servidor frontend:
   ```sh
   cd ../frontend
   npm start
   # ou
   yarn start
   ```

7. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

## Uso

1. Insira um tópico de estudo no campo de entrada.
2. Clique em "Gerar Tópico" para gerar os tópicos de estudo.
3. Visualize os tópicos gerados na lista.
4. Clique em "Salvar em PDF" para baixar os tópicos em formato PDF.
5. Clique em "Limpar" para limpar os tópicos gerados.

## Documentação da API

A documentação da API está disponível em:
```
http://localhost:5000/api-docs
```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```sh
   git checkout -b feature/nova-feature
   ```
3. Commit suas mudanças:
   ```sh
   git commit -m 'Adiciona nova feature'
   ```
4. Faça o push para a branch:
   ```sh
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
