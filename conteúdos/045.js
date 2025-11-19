const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [21,25,19,20,16,18,22];
p_array.innerHTML = `[${elementos_array}]`

// o every procura equivalencia; todos os elementos tem que equivaler a regra para o retorno ser true;

btnVerificar.addEventListener("click", (evt)=>{
    
    const retorno = elementos_array.every((el,i, arr)=>{
        if(el < 18){
          resultado.innerHTML = `Array não conforme na posição ${i}`;
        }
        return el>=18
    })
    if(retorno){
        resultado.innerHTML= "Array conforme!"
    }
})



