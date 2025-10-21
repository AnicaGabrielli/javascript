// o método filter vai iterar os elementos do array e vai permitir que se realize uma filtragem e se ccrie um outro array filtrado
const filtroMenor18 =(valor, indice, arr)=>{
    if(valor <= 18){
        return valor;
    }
    
}
const idades = [12, 21, 30, 17, 44, 50];
const menor = idades.filter(filtroMenor18);
const maior = idades.filter((val, ind, arr)=>{
    if(val > 18)
        return val
})
console.log(idades,menor, maior)