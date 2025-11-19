// o find permite pesquisar o elemento no array e reotrnar o primeiro elemento

const p_Array = document.getElementById("array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const bntPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado")

console.log(p_Array)

const elementos_array = [10,4,5,6,7,20,15, "html", "css", "javascript"];

p_Array.innerHTML = elementos_array;

bntPesquisar.addEventListener("click", (evt)=>{
    resultado.innerHTML = "Valor não encontrado";
    const ret = elementos_array.find((e,i)=>{
        if(e == txt_pesquisar.value){
            resultado.innerHTML = "Valor encontrado "+e+"  na posição "+ i;
    
        }
    })
    console.log(ret)
})