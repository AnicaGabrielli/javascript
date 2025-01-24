// os operadore bitwise operam na camada dos bits que 
//funcionam a parrtir do binariasmo

// os operadore citwise fazem a operação no bit a bit

let a = 10
let b = 11

let res = a & b 
console.log(res);/*
O resultado dessa operação vai ser 10 porque
00001010 = 10
00001011 = 11
--------
00001010 - Quando os números são equivalentes eles permanecem,
quado não recebem o 0 como correspondente. Nesse caso da operação
em sí, o resultado sera dez pois o binário correspodente a essa
correspondencia entre os números comparados é 00001010 que é 
equivalente a 10 no meio decimal.

*/

let res2 = a | b;
console.log(res2);/*Nesse caso, o resultado vai ser 11 pois onde
houver o bit 1, independentemente de correspondencia ou não, 
o bit resultate vai ser 1;
00001010
00001011
--------
00001011 - 11
*/

let res3 = a ^ b;
console.log(res3);/* o ou exclusivo só vai retornar 1 onde
houver 1, se houver equivalencia retorna 0. Em outras palavras,
onde não houver equivalencia, o retorno é 1, do contrário 0;
1010
1011
----
0001 - 1
*/

let res4 = a << 1 // deslocando um bit para esquerda 
console.log(res4);/*
1010 -> 10100 - numero resultante corrsponde a 20
o bit foi deslocado para esquerda, e o espaço vazio que sobrou
foi preenchido com 0. 
IMPORTANTE: quando se faz o deslocamneto de bit para esqueda,
o valor é dobrado.

*/
let res5 = 30 >> 1 // deslocando um bit para direita
console.log(res5)/*
O bit da direit ´é morto e se adciona um 0 a esqueda

11110 -> 01111 - 15
IMPORTANTE: delocar um bit para direita, o valor é reduzido 
para metade;


*/
// se quiser que seja mais de um bit, apenas altere de a quantide
let res6 = 20 << 2; // valor quadruplicado
console.log(res6);
