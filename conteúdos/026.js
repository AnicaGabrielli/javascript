/*IMPORTANTE: Se você colocou um return dentro do loop,
isso altera drasticamente o comportamento do código.
O uso de return dentro do laço faz com que a função
encerre sua execução assim que o return é encontrado,
devolvendo imediatamente o valor atual e ignorando 
as iterações seguintes.*/

const soma=(...valores)=>{
    const somar = val=>{
        let res = 0;
        for(v of val){
            res+=v
        }   
        return res
        
    }
    return somar(valores)
}

console.log(soma(10, 5, 15));
valor = [101,223,452]
console.log(soma(...valor));
