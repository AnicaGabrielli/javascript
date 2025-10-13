const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn_tranferir = document.querySelector("#btn_transferir");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target;
        // se tem a classe, o toglle remove, se não tem, acrescenta.
        curso.classList.toggle("selecionado");

    })
})

btn_tranferir.addEventListener("click", ()=>{
    const cursosSelecionados  = [...document.querySelectorAll(".selecionado")];
    const cursosNaoSelecionadoa = [...document.querySelectorAll(".curso:not(.selecionado)")];
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionadoa.map((el)=>{
        caixa1.appendChild(el);
    })
}) 



/*
- pegar o target do elemento clicado
- dar um append child na caiza um
- 
*/ 