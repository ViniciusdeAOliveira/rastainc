const selectVagas = document.querySelector("#vaga");

/* AJAX
Técnica de Comunicação e Transmissão de Dados*/

/* 1. Acessando a URL (endpoint) da API (Servidor de Dados)*/
fetch("http://localhost:3000/vagas")
/* 2. ...E então (then) capture a resposta da API no formato json */
.then( resposta => resposta.json())
/*3. ...E então, capture os dados da resposta e faça o que quiser com eles (console, colocar no HTML, etc)*/
.then( dados => {

    console.log(dados);

    selectVagas.innerHTML="<option></option>";

    for(let vaga of dados){
        let opcao = document.createElement("option");
        opcao.textContent = vaga.titulo;
        opcao.value = vaga.id;
        selectVagas.appendChild(opcao);        
    }
    
})

/* 
Mostrar a versão do Node.js instalada: 
node -v

Instalar o json-server (usar somente 1x):
npm install -g json-server


Acessar uma determinada pasta:
cd CaminhoParaAPastaDeProjeto

Ver o conteúdo da pasta:
dir

Inicializar o servidor de dados (precisa estar na pasta de projeto, onde está o dados.json):
json-server --watch dados.json


Encerrar o servidor:
CTRL C
*/
