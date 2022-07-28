# projetoUPAP

Rotas/EndPoints
GET /todos
Rota que retorna uma lista com todas as UPAs.
Rota que retorna uma lista com todos os pacientes.
HTTP 200 OK
 
GET /:id
Rota que retorna uma UPA por id.
Rota que retorna um paciente por id.
HTTP 200 OK
 
POST /
Rota que recebe uma nova UPA, adiciona ela ao banco de dados MongoDB e retorna o cadastro criado.
Rota que recebe um novo paciente, adiciona ele ao banco de dados MongoDB e retorna o cadastro criado.
HTTP 201 CREATED
 
PUT /:id
Rota que atualiza uma UPA cadastrada anteriormente, no banco de dados MongoDB, e retorna o cadastro atualizado.
Rota que atualiza um paciente cadastrado anteriormente, no banco de dados MongoDB e retorna o cadastro atualizado.

HTTP 200 OK
 
DELETE /:id
Rota que deleta uma UPA baseada em seu id.
Rota que deleta um paciente baseado em seu id.
HTTP 204 NO CONTENT


Referências Bibliográficas:
https://mongoosejs.com/docs/api.html#query_Query-countDocuments

https://acervolima.com/funcao-de-contagem-de-mongoose/#:~:text=count()%20%C3%A9%20usada%20para,como%20uma%20consulta%20de%20contagem.&text=Par%C3%A2metros%3A%20Esta%20fun%C3%A7%C3%A3o%20aceita%20um,retorna%20o%20objeto%20de%20consulta.


<br>
## 💻 Sobre o projeto 
<h1 align="center">
    <br>
    <p align="center">Projeto Final - UPAP {Reprograma On15}<p>
</h1>
<p align="center">
<img src="./assets/cestas-solidarias.gif" width="350" height="300"/>
</p>

<br>
 A API foi desenvolvida como Projeto Final do curso de Back-End da Reprograma (Turma On15) com o auxílio da professora Hanna e das monitoras, sendo pré-requisito para a conclusão do curso.
<p align="justify">A API tem a finalidade de informar para a população a quantidade de pacientes que estão em atendimento em cada UPA (Unidade de Pronto Atendimento), com o propósito de distribuir os pacientes por UPA, a fim de melhorar o tempo e a qualidade do atendimento e, criar um banco de dados com UPAs e pacientes.

<p align="justify">A cidade de Presidente Prudente está localizada no interior de SP e, foi escolhida para testar a API,
pois a cidade não tem nenhum sistema que apresente essa informação a população.

<p align="justify">A motivação para escolha do projeto, foi a lotação nas UPAs de Presidente Prudente / SP e a falta de informação para facilitar e distribuir melhor o atendimento. Atualmente a cidade conta com uma linha de ônibus que percorre as unidades de saúde da cidade. A prefeitura disponibiliza um site com as informações sobre atestado médico, médicos de plantão, normas etc., porém não consta em pesquisas realizadas, a informação em um banco de dados, sobre a quantidade de pacientes sendo atendidos por dia, por exemplo. .

<br><br>

## 🚀 Descrição da API UPAP

<br>

<p align="justify">O projeto é uma API REST que permite que funcionários das Unidades de Pronto Atendimento (UPA), consigam cadastrar os pacientes em atendimento, informando os dados cadastrais dos pacientes que procuram atendimento em alguma unidade de pronto atendimento da cidade. Após o atendimento, o paciente é deletado do sistema. A população tem acesso à quantidade de pacientes em atendimento em cada UPA, separadamente, podendo assim se dirigir a UPA com menos pacientes.

<p align="justify">A interface é um CRUD completo integrado com o banco de dados (Mongo DB), onde é possível listar os pacientes em cada UPA, as UPA's cadastradas, cadastrar novos pacientes, cadastrar novas UPA's, atualizar os dados e deletar os cadastros dos paciente e das UPA's. 

  
<br>

## ⚙️ Objetivos
- Criar um banco de dados com as UPA’s;
- Criar um banco de dados com os pacientes;
- Informar para a população a quantidade de pacientes que estão em atendimento em cada UPA;
- Distribuir os pacientes por UPA, a fim de melhorar o tempo e a qualidade do atendimento.

<br>

## 📚 Aprendizados
O projeto final consiste em ter uma ideia, colocar em prática e criar uma API fundamentada no CRUD, que contém os verbos:  CREATE (CRIAR), READ (LER-CONSULTAR), UPDATE (ATUALIZAR) e DELETE (APAGAR). 
<br>
## 🛠️ Tecnologias utilizadas nesse projeto
<br>
Para a construção do projeto, as seguintes tecnologias foram utilizadas:
- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  
### Pacotes Utilizados 
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)


<br>
## 📁 Arquitetura MVC 
```
 📁 cestas-solidarias
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 anajacinta.js
   |         |- 📑 guanabara.js 
             |- 📑 upa.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |       
   |    |- 📁 models
   |         |- 📑 anajacintaSchema.js
   |         |- 📑 guanabaraSchema.js  
             |- 📑 upaSchema.js
   |         
   |
   |    |- 📁 routes
   |         |- 📑 anajacintaRoutes.js 
   |         |- 📑 guanabaraRoutes.js
   |         |- 📑 upaRoutes.js
   |
   |    |- 📑 app.js
   |   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 Procfile.md
   |- 📑 server.js
```

<br>
## 🚧 Melhorias para o futuro 
<br>
* Autenticação, login e senha.
* Testes.

<br>
## 🔃 Rotas
* local: http://localhost:9000
* Heroku: https://projetoupap.herokuapp.com/anajacinta/listar/anajacinta
          https://projetoupap.herokuapp.com/guanabara/listar/guanabara
    * Utilize o [Postman](https://www.postman.com/) para testar os endpoints da API localmente ou via Heroku
<br>
## 🔃 Retorna a documentação no swagger: 
    
Heroku: 
| Método HTTP  | Endpoint                            | Descrição                            |
| ------------ | ----------------------------------- | ------------------------------------ |
| GET          | `http://localhost:9000/api-docs`    |  documentação  swagger               |        
<br>
## 🔃 Retorna teste com apresentação: 
| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:9095/`     |  Mensagem de apresentação (Index)    |             |
<br>
## 🔃 Manipulação das Rotas de Usuários que serão ajudados:
| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/users`                | Retorna todos os usuários            |
| GET          | `/users/private`        | Retorna todos os dados               |
| POST         | `/users/create`         | Cria/cadastra um novo usuário        |
| PUT          | `/users/update/:id`     | Altera informações de um usuário     |
| DELETE       | `/users/delete/:id`     | Deleta um usuário específico         |
<br>
## 🔃 Manipulação das Rotas das pessoas que fizeram Login:
| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/helpers`            | Retorna todos os usuários                  |
| GET          | `/helpers/private`    | Retorna todos os dados sem restrição       |
| POST         | `/helpers/register`   | Cria um novo cadastro/login                |
| POST         | `/helpers/login `     | Faz o login                                |
| PUT          | `/helpers/update/:id` | Altera informações de um usuário           |
| DELETE       | `/helpers/delete/:id` | Deleta um usuário específico               |
<br>
## ✅ Dados para Collection Cestas Solidarias:
- id: gerado automaticamente 
- nome: texto e obrigatório
- sobrenome: texto e obrigatório
- email: texto e obrigatório 
- celular: número e obrigatório
- whatsapp: booleano e obrigatório
- cpf: número e obrigatório 
- bairro: texto e obrigatório 
- pix: texto e obrigatório 
- termosDeUso: texto e obrigatório
- informacao: texto e obrigatório  
- criadoEm: data gerada automaticamente e obrigatório
<br>
## ✅ API deve retornar seguinte JSON:
```jsx
{
    "_id": "61b780fa0fd8f51ac598b64b",
    "name": "Henrique",
    "nickname": "Neves",
    "whatsapp": true,
    "bairro": "cordeiro",
    "termosDeUso": true,
    "informacao": "Três filhos, desempregado, sem alimentos em casa, necessitando urgente de ajuda com cestas básicas ou qualquer tipo de doação",
    "criadoEm": "2021-12-13T17:19:43.701Z",
    "__v": 0
}
```
 <br>
 ## ✅ Dados para Collection Login:
- id: gerado automaticamente 
- nome: texto e obrigatório
- sobrenome: texto e obrigatório
- cpf: número e obrigatório
- email: texto e obrigatório
- password: texto e obrigatório
- termosDeUso: texto e obrigatório
<br>
## ✅ API deve retornar seguinte JSON:
```jsx
{
    "messagem": "Pessoa cadastrada com sucesso",
    "saveUser": {
        "name": "Vitória",
        "nickname": "Leite",
        "cpf": 33355566788,
        "email": "vicsleite@gmail.com",
        "password": "$2b$10$n9jsDR1jjcN3Gpk8.EDXDeTOHwKCedTERQQyWh38jgCoZlwixFbq6",
        "termosDeUso": "false",
        "_id": "61b7a3a8a02e42b50f53a427",
        "createdAt": "2021-12-13T19:48:56.683Z",
        "updatedAt": "2021-12-13T19:48:56.683Z",
        "__v": 0
    }
}
```
<br>
## 👨‍💻 Autora
<br>
<td>
<img style="border-radius: 20%;" src="https://github.com/dayaneoli" width="200px;" alt=""/> </td><br> 
## [Dayane Oliveira](https://github.com/dayaneoli/reprograma-ProjetoUPAP)
## [LinkedIn](https://www.linkedin.com/in/dayane-oliveira-410528242/) 
<br>
## 🥰 Agradecimentos:
<p align="justify"> Primeiramente a Deus, meus pais e irmãos pelo apoio e compreensão. Agradecer a Reprograma pela oportunidade e a turma On15.

