const caixa1 = document.getElementById("caixa1")
const bnt_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP","REACT","MYSQL", "REACT NATIVE" ]

// adicionando dinamicamente

cursos.map((el, chave)=>{
    const NovoElemento = document.createElement("div");
    NovoElemento.setAttribute("id", `c${chave+1}`);
    NovoElemento.setAttribute("class", "curso c1");
    NovoElemento.innerHTML = el;
    const btn_lixeira = document.createElement("img");
    btn_lixeira.setAttribute("src", "./img/lix.svg")
    btn_lixeira.setAttribute("class", "btnLixeira");
   
    btn_lixeira.addEventListener("click", (evt)=>{
        caixa1.removeChild(evt.target.parentNode)

    })
    caixa1.appendChild(NovoElemento)
     NovoElemento.appendChild(btn_lixeira)
})
