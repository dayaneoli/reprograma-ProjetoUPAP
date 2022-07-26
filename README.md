<h1 align="center">
    <br>
    <p align="center">Projeto Final - UPAP {Reprograma On15}<p>
</h1>

<p align="center">
<img src="./assets/ProjetoUPAP.png" width="500" height="500"/>
</p>

<br><br>

## 💻 Sobre o Projeto

<br>
 <p align="justify">A API foi desenvolvida como Projeto Final do curso de Back-End da Reprograma (Turma On15) com o auxílio da professora Hanna e das monitoras, sendo pré-requisito para a conclusão do curso.
 
<p align="justify">A API tem a finalidade de informar para a população a quantidade de pacientes que estão em atendimento em cada UPA (Unidade de Pronto Atendimento), com o propósito de distribuir os pacientes por UPA, a fim de melhorar o tempo e a qualidade do atendimento e, criar um banco de dados com UPAs e pacientes.

<p align="justify">A cidade de Presidente Prudente está localizada no interior de SP e, foi escolhida para testar a API,
pois a cidade não tem nenhum sistema que apresente essa informação a população.

<p align="justify">A motivação para escolha do projeto, foi a lotação nas UPAs de Presidente Prudente / SP e a falta de informação para facilitar e distribuir melhor o atendimento. Atualmente a cidade conta com uma linha de ônibus que percorre as unidades de saúde da cidade. A prefeitura disponibiliza um site com as informações sobre atestado médico, médicos de plantão, normas etc., porém não consta em pesquisas realizadas, a informação em um banco de dados, sobre a quantidade de pacientes sendo atendidos por dia, por exemplo. 

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

## 📚 Desenvolvimento
O projeto final consiste em ter uma ideia, colocar em prática e criar uma API fundamentada no CRUD, que contém os verbos: CREATE (CRIAR), READ (LER-CONSULTAR), UPDATE (ATUALIZAR) e DELETE (APAGAR). 

<br>
## 🛠️ Tecnologias utilizadas nesse projeto
<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:
- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)
- [VScode](https://code.visualstudio.com/)
- [Heroku](https://dashboard.heroku.com/apps)  
### Pacotes Utilizados 
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://www.npmjs.com/package/cors)


<br>


## 📁 Arquitetura MVC 
```
 📁 projeto_final
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

* Heroku: 
- https://projetoupap.herokuapp.com/anajacinta/listar/anajacinta
- https://projetoupap.herokuapp.com/guanabara/listar/guanabara
- https://projetoupap.herokuapp.com/upa/listar

        
    * Utilize o [Postman](https://www.postman.com/) para testar os endpoints da API localmente ou via Heroku.

<br>

## 🔃 Manipulação das Rotas das UPA's:
| Método HTTP  | Endpoint                | Descrição                          |
| ------------ | ----------------------- | ---------------------------------- |
| GET          | `/upa/listar`           | Lista todas as UPA's               |
| GET          | `/upa/listar/:id`       | Lista uma UPA por id               |
| POST         | `/upa/cadastrar`        | Cria/cadastra uma nova UPA         |
| PUT          | `/upa/atualizar/:id`    | Altera informações de uma UPA      |
| DELETE       | `/upa/deletar/:id`      | Deleta uma UPA por id              |

<br>

## 🔃 Manipulação das Rotas dos pacientes da UPA Ana Jacinta:
| Método HTTP  | Endpoint                                | Descrição                                                |
| ------------ | --------------------------------------- | -------------------------------------------------------- |
| GET          | `/anajacinta/listar/anajacinta`         | Lista a quantidade de pacientes da UPA Ana Jacinta       |
| GET          | `/anajacinta/listar/anajacinta/:id`     | Lista um paciente da UPA Ana Jacinta por id              |
| POST         | `/anajacinta/cadastrar/anajacinta`      | Cria/cadastra um novo paciente na UPA na UPA Ana Jacinta |
| PUT          | `/anajacinta/atualizar/anajacinta/:id`  | Altera informações de um paciente da UPA Ana Jacinta     |
| DELETE       | `/anajacinta/deletar/anajacinta/:id`    | Deleta um paciente da UPA Ana Jacinta por id             |

<br>

## 🔃 Manipulação das Rotas dos pacientes da UPA Guanabara:
| Método HTTP  | Endpoint                                | Descrição                                                |
| ------------ | --------------------------------------- | -------------------------------------------------------- |
| GET          | `/guanabara/listar/guanabara`           | Lista a quantidade de pacientes da UPA Guanabara         |
| GET          | `/guanabara/listar/guanabara/:id`       | Lista um paciente da UPA Guanabara por id                |
| POST         | `/guanabara/cadastrar/guanabara`        | Cria/cadastra um novo paciente na UPA na UPA Guanabara   |
| PUT          | `/guanabara/atualizar/guanabara/:id`    | Altera informações de um paciente da UPA Guanabara       |
| DELETE       | `/guanabara/deletar/guanabara/:id`      | Deleta um paciente da UPA Guanabara por id               |

<br>


## ✅ Dados para Collection Ana Jacinta e Guanabara:

- id: gerado automaticamente 
- nome: tipo string / obrigatório
- nomeSocial: tipo string / optativo
- dataDeNascimento: tipo string / obrigatório 
- endereco: tipo string / obrigatório 
- telefoneDeContato: tipo number / obrigatório 
- cpf: tipo string / obrigatório 
- createAt: tipo date / gerada automaticamente 
<br>

## ✅ A API deve retornar o seguinte JSON:
```jsx
{
    "message": "Total de pacientes em atendimento na UPA Guanabara: 9"
}
```

 <br>

 ## ✅ Dados para Collection UPA:
- id: gerado automaticamente 
- nome: tipo string / obrigatório
- endereco: tipo string / obrigatório 
- telefone: tipo number / obrigatório 
<br>

## ✅ A API deve retornar o seguinte JSON:
```jsx
{
    "message": "Lista das upas da cidade Presidente Prudente / SP",
    "upa": [
        {
            "_id": "62d9f19130d29ff45b94c4b9",
            "nome": "UPA do Ana Jacinta",
            "endereco": "Av. José Zerial - Conj. Hab. Ana Jacinta, Pres. Prudente - SP",
            "telefone": "(18) 3909-4985",
            "createdAt": "2022-07-22T00:38:42.104Z",
            "updatedAt": "2022-07-22T00:38:42.104Z",
            "__v": 0
        }]
}

```
<br>

## 👨‍💻 Autora
<br>

## [Dayane Oliveira](https://github.com/dayaneoli/reprograma-ProjetoUPAP)
## [LinkedIn](https://www.linkedin.com/in/dayane-oliveira-410528242/) 

<br>

## 🥰 Agradecimentos:
<p align="justify"> Primeiramente a Deus, a todos os Santos e Anjos. 
Aos meus pais e irmãos pelo apoio e compreensão. 
Agradecer ao meu primo, Vinícius Foltran, por ter feito as imagens e design dos slides. 
Agradecer também a Reprograma pela oportunidade de transformação da vida de mulheres, que é uma causa de extrema importância.
E finalmente, a todas as meninas da turma On15.

## 📚 Referências Bibliográficas:

- https://mongoosejs.com/docs/api.html#query_Query-countDocuments

- https://acervolima.com/funcao-de-contagem-de-mongoose/#:~:text=count()%20%C3%A9%20usada%20para,como%20uma%20consulta%20de%20contagem.&text=Par%C3%A2metros%3A%20Esta%20fun%C3%A7%C3%A3o%20aceita%20um,retorna%20o%20objeto%20de%20consulta.

- https://programming-techniques.com/ask-475-add-images-to-readmemd-on-github/#:~:text=Basta%20adicionar%20uma%20etiqueta%20%3Cimg,que%20o%20servidor%20suporta%20CORS.&text=Preciso%20de%20incluir%20algumas%20imagens%20no%20meu%20ficheiro%20README.,-N%C3%A3o%20sei%20como

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

