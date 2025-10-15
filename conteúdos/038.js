const caixa1 = document.getElementById("caixa1")
const bnt_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP","REACT","MYSQL", "REACT NATIVE" ]


// criando e adcionando elementos

/*onst novoElemento = document.createElement("div");
novoElemento.innerHTML = "Reactive native";
caixa1.appendChild(novoElemento)
novoElemento.setAttribute("id", "c7");
novoElemento.setAttribute("class", "curso c1")*/

// adicionando dinamicamente

cursos.map((el, chave)=>{
    const NovoElemento = document.createElement("div");
    NovoElemento.setAttribute("id", `c${chave+1}`);
    NovoElemento.setAttribute("class", "curso c1");
    NovoElemento.innerHTML = el;
    caixa1.appendChild(NovoElemento)
})