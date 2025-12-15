//coleção MAP. a função map e a coleção MAP são coisas diferentes
// A coleção Map é uma coleção do tipo chave-valor
// no map se referencia a chave e ele retorna o valor
let mapa = new Map()
// adicionar elementos. As chaves não podem ser as mesmas ou o valor sera substituido. Ele não permite duplicações. Ele serve para quando não puder ter entradas duplicadas no array.
mapa.set("curso","javascript");
mapa.set(10,"cfb");
mapa.set(true,"javascript");
mapa.set(false,"javascript");
mapa.set(Number,30);
console.log(mapa)

// obter valor
let obter = mapa.get(false);
console.log(obter)

// verificar se a chave existe na coleção

if(mapa.has(10)){
    console.log("A chave existe na coleção");
}else{
    console.log("A chave Não está na coleção");
}

// um forma de se obter o valor
let pes = false;

if(mapa.has(pes)){
    console.log("A chave existe na coleção com o valor: " + mapa.get(pes));
}else{
    console.log("A chave Não está na coleção");
}

// encontrar o tamanho da coleção
console.log(mapa.size)

// deletar

mapa.delete(10)

// percorres o mapa

mapa.forEach((el)=>{
    console.log(el)
})

