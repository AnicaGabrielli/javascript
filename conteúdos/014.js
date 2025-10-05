/*O switch case avalia a entrada e verifica 
se coincide com algum caso e executa. Se 
nenhum coicidir, ele cai no defaut. 
Pode haver quantos casos forem nescessário*/

let colocacao = 5;

switch(colocacao){
    case 1:
        console.log("Primeiro lugar");
        break
    case 2:
        console.log("Segundo lugar");
        break
    case 3:
        console.log("Terceiro Lugar");
        break
    case 4: case 5: case 6:
        console.log("Prémio de participação")
        break
    default:
        console.log("Não subiu ao pódio")
        break
}