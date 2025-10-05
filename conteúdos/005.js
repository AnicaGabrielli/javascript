// relacionais

let valor1 = 10;
let valor2 = 5;
let valor3 = 10;

document.write('<br>')
document.write('<br>')

// retorna verdadeiro

document.write(valor1 > valor2);

//Essa operação retorna False: not inverte a operação

console.log(!(valor1 == valor3))

// diferente

console.log(valor1 != valor3);


// vai retornar falso, pois em estrutura de objeto também é comparado o espaço de memória

let v1 = {nome: "Bruno"}
let v2 = {nome: "Bruno"}

console.log(v1==v2); //ou
console.log(v1===v2);



