# projetoUPAP

Projeto Final do Curso de Desenvolvimento Back-End da Reprograma - TURMA ON15

Objetivos:

Criar um banco de dados com as UPA’s;

Criar um banco de dados com os pacientes;

Informar para a população a quantidade de pacientes que estão em atendimento em cada UPA;

Distribuir os pacientes por UPA, a fim de melhorar o tempo e a qualidade do atendimento.


Projeto UPAP
Tema
API que informa para a população a quantidade de pacientes que estão em atendimento em cada UPA (Unidade de Pronto Atendimento), com a finalidade de distribuir os pacientes por UPA, a fim de melhorar o tempo e a qualidade do atendimento e, criar um banco de dados com UPAs e pacientes.

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

Desenvolvimento
A motivação para escolha do projeto, foi a lotação nas UPAs de Presidente Prudente / SP e a falta de informação para facilitar e distribuir melhor o atendimento.
Atualmente a cidade conta com uma linha de ônibus que percorre as unidades de saúde da cidade.
A prefeitura disponibiliza um site com as informações sobre atestado médico, médicos de plantão, normas etc., porém não consta em pesquisas realizadas, a informação em um banco de dados, sobre a quantidade de pacientes sendo atendidos por dia, por exemplo. 

Referências Bibliográficas:
https://mongoosejs.com/docs/api.html#query_Query-countDocuments

https://acervolima.com/funcao-de-contagem-de-mongoose/#:~:text=count()%20%C3%A9%20usada%20para,como%20uma%20consulta%20de%20contagem.&text=Par%C3%A2metros%3A%20Esta%20fun%C3%A7%C3%A3o%20aceita%20um,retorna%20o%20objeto%20de%20consulta.

