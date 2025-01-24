/*as repetições do loop são iterações.
Os lops são definidos, quando se sabe a 
quantidade de vezes que se vai iterar; e 
indefininidos, quando não se sabe
*/

// for - executa enquanto a consição for verdadeira
console.log("início do programa")
for(let i = 12; i > 0; i--){
    console.log(i);
}
console.log("fim do programa")

// ex2
 for (let index = 0; index < 100; index++) {
     if (index%2 == 0) {
      console.log(`${index} - par`)   
     }else{
         console.log(`${index} - impar`)   
     }
 }