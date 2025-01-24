// O parâmetro res possibilita que se faça funções sem quantidade de 
//parametros definidos. o ... tranforma em um array e espalha os valores
function soma(...valores){
    let res = 0;
    for (let i of valores){
        res+=i;
    }  
    
    return res;
}

console.log(soma(10, 5));