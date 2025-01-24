// obtém o elemento especificado. mais genérico
const divonly = document.querySelector('div'); // pega apenas a primeira div ou o primeiro elemento da chave especificada;
const divtodos = document.querySelectorAll('div');// seleciona todos que tenham a chave
const divtodos2 = document.querySelectorAll('.curso')[8];
const divtodos3 = document.querySelector('#c2')
const qyeryS = [...document.querySelectorAll('.c2,p')]
const aajdnd = [...document.querySelector('div[class]')]
const sss = [...document.querySelector('div > p')]
console.log(divtodos);
