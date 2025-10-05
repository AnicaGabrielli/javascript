// pegar elementos pelo nome da classe; retorna um html colection

const cursoTodos = [...document.getElementsByClassName('curso')];
const c1 = [...document.getElementsByClassName('c1')];
const c2 = [...document.getElementsByClassName('c2')];
const cursoespecial = document.getElementsByClassName('curso')[0];
console.log(cursoTodos);
console.log(c1,c2);

cursoTodos.map((el)=>{
    el.classList.add("destaque");
})
