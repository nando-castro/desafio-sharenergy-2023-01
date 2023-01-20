<h1 align="center">:file_cabinet: Desafio Sharenergy 2023</h1>

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

Para iniciar o projeto é necessário dar o seguinte comando:
```
npm run dev
```

ou 

```
npm start
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
