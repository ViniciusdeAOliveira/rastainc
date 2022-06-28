//JS Puro

// const titulo = document.querySelector("h1");

// titulo.style.color = "red";

//Usando JQuery

const titulo = $("h1");
// titulo.hide().fadeIn(5000);
titulo.css("color","blue");
titulo.text("Relação de Candidatos");

/* Script para carregamento de Candidatos */

const botao = $("#carregar");
const lista = $("#lista");

botao.on("click", function(){
    $.ajax({
        url:"http://localhost:3000/candidatos",
        dataType: "json",
        success: function(resposta){
            lista.html("");
            // console.log(resposta);
            $.each(resposta, function(indice, conteudo){
                lista.append(
                    `<li class="list-group-item">${conteudo.nome}</li>`
                ).hide().slideDown();
            });

        }
    })
})