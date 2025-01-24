"use strict"
// variáveis são espaços na memória com algo

var nominho = 'bruno'; // eleva o vlor dessa varíavel até o topo; ela é de escopo global

function teste(){
    let nome = bruno;
    if(true){
        console.log(nome);
    }
    console.log(nome);
}

teste();

console.log(nome);

// o let cuida para que a varável seja acessado  dentro do escopo

let nome = 'bruno';
nome = 'bnbnbn';
nome = 12;
console.log(nome);


// const não se altera

const curso = 'Javascrip';
console.log(curso);
