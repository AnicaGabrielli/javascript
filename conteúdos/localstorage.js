// 1 - inserir dados
let Pessoa ={
    nome:"Anica"
}
localStorage.setItem(`nome`,`${Pessoa.nome}`)
// 2 - restart sem perder dados

// regatar itens 

const name = localStorage.getItem("nome");
console.log(name)

