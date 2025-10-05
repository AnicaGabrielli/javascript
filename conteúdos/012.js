// o spread espalha o elemento e devolve o elemento ao elemento em array

let n1 = new Array( 10, 20, 30)
let n2 = new Array(11, 22, 33, 44, 55)
//let n3 = [... n1]
// let n3 = [n1, n2] - apenas colocou os arrays em duas posições sem juntá - los
let n3 = [...n1, ...n2] // espalha os elementos e os coloca em posições ordenadas

console.log(n1)
console.log(n2)
console.log(n3)

/* exemplo 2 - nesse caso, o spread espalha e junta as propriedades, sendo o valores
prevalecentes em propriedades comuns, aqueles que foram espalhadas por último.
*/
const jogador = {
    nome: "Bruno",
    energia: 100,
    vidas: 3,
    magia: 3,
    velocidade: 1222
}
const jogador2 = {
    nome: "Bruce",
    energia: 100,
    vidas: 5
}

const jogador3 = {...jogador2, ... jogador};
console.log(jogador3)

// exemplo 3 - nesse caso, o array é espalhado e é possivel realizar a soma
const soma = (v1, v2, v3)=>{
    return v1+v2+v3
}

let valores = [1, 5, 4]
console.log(soma(...valores))

// exemplo 4 - o spread tranforma o html colection em um array que se pode adcionar outros tipos de elemento que não htmls, além disso pode-se usar no array vários medtodos

const objs = document.getElementsByTagName("div");
console.log(objs);

const objs2 = [...document.getElementsByTagName("div")]
console.log(objs2)
objs2.forEach(element => {
    console.log(element);
    element.innerHTML = "Curso"
});

