// uma função anônima(não tem nome) não está na memória e só vai ser executada no tempo de execução(real).
const f = function (v1, v2) {
    return v1+v2
    
}
console.log(f(12, 17))

//ex2
const n =(...valores)=>{
    let res =0;
    for(v of valores){
        res+=v
    }
    return res
}
console.log(n(10, 5))

//
const construct = new Function ("v1","v2", "return v1+v2") // função construtor anônima
console.log(construct(10, 23))