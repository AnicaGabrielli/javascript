let num = [10, 20, 30, 40, 50];

// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

// o n tem a posição de cada um dos elementos. 
// o for in também retorna a propriedades dos elementos.
for(n in num){
    console.log(num[n])
}

// o for of vai dentro. 
for(n of num){
    console.log(n)
}
//Com o for of, é possível alterar
// diretamente os elementos também ou utilizá-lo para
// alguma manipulação do dom
for(n of num){
    console.log(n - 4*2)
}
