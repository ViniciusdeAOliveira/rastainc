// Selecionando os campos do formulário

const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoData = document.querySelector("#data");
const campoTelefone = document.querySelector("#telefone");
const campoEmail = document.querySelector("#email");
const campoVaga = document.querySelector("#vaga");

formulario.addEventListener("submit",function(event){
    event.preventDefault();

    // Montando um objeto com os dados do formulário

    let dados = {
        nome: campoNome.value,
        data: campoData.value,
        telefone: campoTelefone.value,
        email: campoEmail.value,
        vaga: campoVaga.selectedOptions[0].textContent
    };

    console.log(dados);

    fetch('http://localhost:3000/candidatos', {
        // Método POST: indica que os dados serão enviados
        method: "POST",

        // "Limpeza/Conversão" do objeto JS para JSON
        body: JSON.stringify(dados),

        // Cabeçalho da mensagem (importante para a API)
        headers: { "Content-type" : "application/json"}
    }).then( resposta => resposta.json()).then( dados => {
        alert("Dados enviados com sucesso!");
    })

})