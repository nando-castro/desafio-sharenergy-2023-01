<<<<<<< HEAD
<h1 align="center">:file_cabinet: Desafio Sharenergy 2023</h1>

## Vídeo - Apresentação do projeto

https://youtu.be/QHZXn4o41eU

## :memo: Descrição
Projeto desenvolvido para o processo seletivo da empresa Sharenergy em 2023.

## :books: Funcionalidades
* <b>Páginas de Login e Registro</b>: Páginas destinada a login e registro de usuários na aplicação.
* <b>Página Principal e Listagem de usuários</b>: Página principal da aplicação, retorna uma lista de usuários com a foto, nome completo, email, username e idade. Todas as informações são geradas apartir da api Random User Generator.
* <b>Página da Api Cat HTTP</b>: Exibe uma lista de status code, onde ao selecionar um dos status code listados, a aplicação retorna seu nome e a imagem relacionada da Api Cat HTTP. 
* <b>Página da Api Random Dog</b>: Retorna uma imagem aleatória gerada pela Api Random Dog.
* <b>Página de CRUD de Clientes</b>: Retorna uma lista de clientes, onde é possível adicionar novos clientes, editar as informações de um cliente e deletar um cliente.

## :wrench: Tecnologias utilizadas
* Node.Js;
* React.Js;
* MongoDB;
* TypeScript;
* HTML e CSS;
* Axios;
* Express;
* Styled-components;
* TailwindCSS;

## API

**Registro de Usuário**
```http
POST /signup
```
##### &nbsp; ‣ &nbsp; Enviar no corpo da requisição
  ```json
  {
    "name": "admin",
    "password": "secret"
    "passwordConfirm": "secret"
  }
  ```

**Login de Usuário**
```http
POST /signin
```
##### &nbsp; ‣ &nbsp; Enviar no corpo da requisição
  ```json
  {
    "name": "admin",
    "password": "secret"
  }
  ```
  ##### &nbsp; ‣ &nbsp; Resposta da requisição
```json
 {
   "token": "token-api-generate"
 }
```

**Criar Cliente**
```http
POST /client
```
##### &nbsp; ‣ &nbsp; Enviar no corpo da requisição
  ```json
  {
    "name": "admin",
    "email": "admin@admin.com",
    "phone": "9898888-8888",
    "street":"example",
    "number":"123",
    "city":"São Luís",
    "state":"Maranhão",
    "cpf":"12312312312",
  }
  ```

##### &nbsp; ‣ &nbsp; Enviar no Cabeçalho (Headers)
```json
{
  "Authorization": "token",
}
```
**Retornar Clientes**
```http
GET /clients
```
  ##### &nbsp; ‣ &nbsp; Resposta da requisição
```json
  [
    {
      "name": "admin",
      "email": "admin@admin.com",
      "phone": "9898888-8888",
      "street":"example",
      "number":"123",
      "city":"São Luís",
      "state":"Maranhão",
      "cpf":"12312312312",
    },
  ]
  ```
  ##### &nbsp; ‣ &nbsp; Enviar no Cabeçalho (Headers)
```json
{
  "Authorization": "token",
}
```

**Atualizar Cliente**
```http
PUT /client/:id
```
##### &nbsp; ‣ &nbsp; Enviar no corpo da requisição
  ```json
  {
    "name": "admin",
    "email": "admin@admin.com",
    "phone": "9898888-8888",
    "street":"example",
    "number":"123",
    "city":"São Luís",
    "state":"Maranhão",
    "cpf":"12312312312",
  }
  ```

##### &nbsp; ‣ &nbsp; Enviar no Cabeçalho (Headers)
```json
{
  "Authorization": "token",
}
```
**Deletar Cliente**
```http
DELETE /client/:id
```
  ##### &nbsp; ‣ &nbsp; Enviar no Cabeçalho (Headers)
```json
{
  "Authorization": "token",
}
```

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, seguir os passos abaixo:
​

## BACK-END

**Environment Variables**: Você precisará adicionar as seguintes variáveis de ambiente ao seu arquivo **.env** ou apenas copie as informações do arquivo **.env.example** para dentro do arquivo **.env**.
​

`MONGO_URI=mongodb://localhost:27017`

`MONGO_DATABASE_NAME=name database`

`PORT = number #recommended:5000`

`SECRET_KEY = any string`

Inicie um terminal na pasta do back:
```bash
  cd /app/back
```

Instale as dependências do projeto:
```bash
  npm install
```

Você pode iniciar o projeto com apenas o seguinte comando:
```
npm start
```
**Ou siga os passos abaixo:**

Execute o seed do projeto:
```bash
  npm run seed
```

Para iniciar o projeto é necessário dar o seguinte comando:
```
npm run dev
```

## FRONT-END

Inicie um terminal na pasta do front:
```bash
  cd /app/front
```

Instale as dependências do projeto:
```bash
  npm install
```

Para iniciar o projeto é necessário dar o seguinte comando:
```
npm run dev
```


## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/nando-castro">
        <img src="https://avatars.githubusercontent.com/u/75530766?v=4" width="100px;" alt="Foto de Fernando Castro no GitHub"/><br>
        <sub>
          <b>nando-castro</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
Finalizado
=======
# Desafio para o processo seletivo SHARENERGY 2023/01

Repositório destinado aos interessados em participar do processo seletivo da SHARENERGY 2023/01. As vagas são voltadas para desenvolvimento de aplicações Web e Mobile.

## Sobre a SHARENERGY

No ramo da produção de energia fotovoltaica, há a modalidade de produção compartilhada. Nessa modalidade, diferentes pessoas investem na construção de uma mesma usina fotovoltaica e dividem o retorno finaceiro referente à energia gerada pela usina.

Acreditamos que as energias renováveis terão um lugar dominante em nossa economia pelo resto de nossas vidas. Trabalhamos no sentido de ampliar o impacto positivo que as energias renováveis podem ter no meio ambiente e nas nossas vidas. O sucesso da SHARENERGY é resultado de nossa equipe apaixonada, juntamente com nosso compromisso de oferecer a melhor solução.

Sabemos que negócios enfrentam desafios únicos e por isso oferecemos soluções turnkey, customizadas, economicamente viáveis e seguras.

A Startup figura entre as top 10 EnergyTechs do ranking 100 Open Startups desde 2018. Prova de que a inovação está enraizada em nossa cultura. Somos uma startup em estágio de crescimento e você trabalhará diretamente com os fundadores, ajudando a definir a visão, o produto e a experiência do usuário.

<p align="left">
  <a href="https://www.linkedin.com/company/sharenergy-brasil/">
    <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn Button">
  </a>
  <a href="https://sharenergy.com.br/">
    <img src="https://img.shields.io/badge/-Website-red" alt="Sharenergy Website Button">
  </a>
</p>

## Sobre a vaga

Já pensou em potencializar o setor que mais cresce na galáxia e trabalhar com uma solução que utiliza tecnologia web de ponta, altamente distribuída com foco em performance e disponibilidade? 👀

Os desenvolvedores da Sharenergy são responsáveis por criar e manter aplicações para clientes internos e externos, prover soluções escaláveis, resilientes e altamente disponíveis que sustentem picos de acesso além de atuar como referência técnica e tutores de outros desenvolvedores.

Procuramos por pessoas dinâmicas e que queiram estar aprendendo sempre. Nossa equipe é jovem, motivada e estamos sempre em busca de soluções criativas para alcançar os resultados que nossos clientes esperam. Se você tem esse perfil, é autoconfiante, autodidata e tem facilidade para lidar com desafios diários, essa vaga é para você!

# O Desafio

Construir uma aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.

## Aplicação

- A página inicial da aplicação deve ser uma `Login Page`;
- O usuário deve ser capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, também, deve existir a possibilidade do usuário utilizar o `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso;
- Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username;
- Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio;
- Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api [Random Dog](https://random.dog/);
- Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf.

### Requisitos da aplicação e de código

- Interface amigável, bonita e limpa
- Responsividade
- Clean Code

### Ferramentas e Stack a ser utilizado

- ReactJS para o frontend
- NodeJS (com ou sem frameworks) ou Golang para o backend
- MongoDB
- TypeScript
- HTML e CSS

### Aprimoramentos adicionais da aplicação (opcional)

A aplicação criada para o desafio pode ser aprimorada com recursos pensados por você. A seguir, foram listadas algumas sugestões do que poderia ser feito:

- Testes
- Documentação

### Mas, afinal, quais ferramentas a Sharenergy utiliza?

* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) e [Typescript](https://www.typescriptlang.org/)
* Front-end: [ReactJS](https://reactjs.org/) e [React Native](https://reactnative.dev/)
* Back-end: [Node.js](https://nodejs.org/en/), [NestJS](https://nestjs.com/) e [Go](https://golang.org/)
* Banco de dados: [MongoDB](https://www.mongodb.com/) do lado do servidor e [Minimongo](https://guide.meteor.com/collections.html) do lado do cliente (cache)
* Gerenciamento de Containers: [Docker](https://www.docker.com/)
* Gerenciamento de Repositórios: [NX](https://nx.dev/)
* UI: [Tailwind CSS](https://tailwindcss.com/) e [Material-UI V4](https://v4.mui.com/)
* Sistema Operacional (principal): [Linux](https://www.linux.org/), também sendo possível utilizar o [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/) (WSL)

## O que devo entregar?

Esperamos de você duas entregas: o código no GitHub e um vídeo explicativo no YouTube.

### Instruções

- Faça um fork desse repositório.
- Em seguida, crie uma branch, cujo nome é o seu nome completo, no seguinte formato: meu-nome-completo.
- Resolva o desafio realizando versionamento local e remoto. Fique à vontade em criar outras branches durante o desenvolvimento do código.
- Inclua no README.md uma breve instrução de instalação e de execução da aplicação criada.
- Faça um vídeo que explique o que você fez no desafio, com duração aproximada de 5 minutos. A facecam é opcional, mas bem-vinda. O vídeo deve ser postado no YouTube (pode deixar como não listado) e seu link deve ser colocado no README.md.
- Ao finalizar o desafio, faça um pull request de sua branch para esse repositório.

### Prazo limite de entrega

O pull request com sua solução do desafio deve ser feito até a data especificada no corpo do email que você recebeu com a descrição do desafio.
>>>>>>> 658b4177728517e37d8c1bba0ece8763724664b3
