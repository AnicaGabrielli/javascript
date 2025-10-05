// são mecanismos concisos para representar funções anônimas

const soma = ()=>{
    return v1 + v2;
}

console.log(soma(10, 5))

//quando é um parâmetro único
const nome = n =>{return n};

// não precisa de return
const add = n => n+10