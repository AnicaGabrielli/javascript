const notas = [];
const notaenviada = document.getElementById("nota");
const enviar = document.getElementById("enviar");
let resultado = document.getElementById('media')


enviar.addEventListener("click",()=>{
    const valor = Number(notaenviada.value);
    if(isNaN(valor) || valor < 0){
        resultado.textContent = "Digite uma nota válida!"
        return;
    }
    notas.push(valor);
    let soma = 0;

    for(let i = 0; i < notas.length; i++){
        soma+=notas[i];
    }
    const media = soma/notas.length;
    resultado.textContent = `A média atual é: ${media.toFixed(2)}`;

    notaenviada.value = "";
    notaInput.focus();

})