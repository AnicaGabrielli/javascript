/*
Os arrays são coleção de dados, variáveis. Em linguagens base, só se armazena um tipo de dado, mas em javascript, pode se armazenar qualquer tipo de dado dentro de um array;
*/ 
let cores = ["blue", ["red", "pink"]]
let cursos = ["HTML", "CSS", "JavaScrip", cores]
console.log(cursos)
console.log(cursos[0])
console.log(cursos.at(0))
console.log(cursos.unshift(12))
console.log(cursos.shift())
console.log(cursos.at(0))
console.log(cursos[3][1][1])

// para ercorrer o array, se usa os llops tradicionais

// é possível criar um array de funç~eos

let valores = [1,2,5,78];
let op = [
    (val)=>{
        let res = 0;
        for( v of val){
            res+=v
        }
        return res;
    },
    
    (val)=>{
        let res = 1;
        for( v of val){
            res*=v
        }
        return res;
    },
    (val)=>{
       
        for( v of val){
            console.log(v)
        }
    }

]

console.log(op[1](valores))
