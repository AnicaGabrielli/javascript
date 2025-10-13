

const msg = ()=>{
    alert('Olá, mundo!')
}
// Serve para escutar os eventos

const c2 = document.getElementById("c2");
const curso = [...document.querySelectorAll(".curso")];

// c2.addEventListener("click", (evt)=>{
//     const el = evt.target;
//     el.classList.add("destaque");
    
// })

curso.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const elm = evt.target;
        alert(`${elm}, foi clicado`)
    })
})