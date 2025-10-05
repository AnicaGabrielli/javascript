let num = 2;

// as chaves só são obrigatórias em casos que há mais de um comando
if( num > 10)
    console.log("número maior que 10")
console.log('Fim do programa')

// ex2

if(num < 2){
    console.log("numeral menor 2")
}else{
    console.log("Maior ou igual 2")
}

// ex3
if(num < 2){
    console.log("numeral menor 2")
}else if (num == 2){
    console.log("igual a 2")
}else{
    console.log('maior que 2')
}

// aninhamento
if(num > 10){
    if( num > 50){
        console.log("Maior que 50")
    }
    console.log("maior que 10, mas menor que 50")
}else{
    console.log("menor que 10")
}

// ex5
let clima = "sol";
let energia = 100;

if(energia > 70 && clima === "sol"){
    console.log("Vou a praia");
}else{
    console.log("vou ao cinema")
}
