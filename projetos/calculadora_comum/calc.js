let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let operacao = document.getElementById("operacao");
const resultado = document.getElementById("resultado");
const calcular = document.querySelector("button");
let resposta;
let form = document.querySelector('form');

calcular.addEventListener("click",(event)=>{
    resultado.innerHTML ='';
    event.preventDefault();
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);
    const op = operacao.value.trim();
    if(op== "+"){
        resposta = n1+n2
        resultado.innerHTML = resposta;
    }else if(op == "-"){
        resposta = n1 - n2;
        resultado.innerHTML = resposta;
    }else if(op== "*"){
        resposta = n1*n2;
        resultado.innerHTML = resposta;
    }else if(op== "/"){
        resposta = n1/n2;
        resultado.innerHTML = resposta;
    }else{
        resultado.innerText = "Insira uma operação válida";
        return;
    }
    resultado.innerText = `Resultado: ${resposta}`;
    form.reset()
    
})
