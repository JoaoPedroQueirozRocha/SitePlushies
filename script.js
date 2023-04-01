
let pesquisar = document.querySelector("#pesquisar");
let pesquisa = document.querySelector("#pesquisa");
let buttonNewsLetter1 = document.querySelector("#buttonNewsLetter1")
let inputNewsLetter1 = document.querySelector("#inputNewsLetter1")
let buttonNewsLetter2 = document.querySelector("#buttonNewsLetter2")
let inputNewsLetter2 = document.querySelector("#inputNewsLetter2")
let botaoBusca = document.querySelector("#botaoBusca")
let selectEstados = document.querySelector("#estados")
let selectTipos = document.querySelector("#tipos");
let selectCategorias = document.querySelector("#categorias");
let inputDe = document.querySelector("#inputDe")
let inputAte = document.querySelector("#inputAte")

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(data=>{
    if(data){
        return data.json();
    }else{
        console.log("erro")
    }
}).then(update=>{
    update.forEach(value => {
        selectEstados.options[selectEstados.options.length] = new Option(value.nome, value.sigla);
    });
})

pesquisar.addEventListener("click",()=>{
    pesquisa.value = ""
});

buttonNewsLetter1.addEventListener("click",()=>{
    inputNewsLetter1.value = ""
})

buttonNewsLetter2.addEventListener("click",()=>{
    inputNewsLetter2.value = ""
})

botaoBusca.addEventListener("click",()=>{;
    selectTipos.value = "tipo"
    selectCategorias.value = "categoria"
    selectEstados.value = "estado"
    inputDe.value = ""
    inputAte.value = ""
})