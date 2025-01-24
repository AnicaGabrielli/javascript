// o MAP itera por completo os elementos de uma coleção

const cursos = new Array('HTML','CSS', 'JavaScrip', 'React');

cursos.map((el, i)=>{
    console.log("curso: "+el+ " - posição do curso " + i)
    
})

// ex 2

let c  = cursos.map((el,i)=>{
    return el 
})
console.log(c)

// ex2 - mao com htmlcolection

let elementos = document.getElementsByTagName("div");
elementos = [...elementos]
elementos.map((e,i)=>{
    console.log(e.innerHTML = "Ânica linda");
})
let val = Array.prototype.map.call(elementos,({innerHTML})=>innerHTML)
console.log(val)

const convertrInt=(e)=>parseInt(e);
let num = ['1','2','3','4','5'].map(convertrInt);
console.log(num);