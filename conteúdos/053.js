// objetos são objetos do mundo real. Ele  segue o molde da classe e tem métodos e propriedades

const { isatty } = require("tty");

class Pessoa{
    constructor(){
        this.nome = "Anica";
    }
}
let p1 = new Pessoa();

console.log(p1.nome)

//passando parametros no construtor

class Alunos{
    constructor(nome){
        this.nome = nome;
    }
}

let aluno1 = new Alunos("Anica");

console.log(aluno1)

// é possívem criar propriedades para os objetos

class Carro{
    canal = "cfbCursos"; /*Propriedade comum a todos os objetos*/
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo == 1){
            this.ptipo = "Esportivo";
        }else if(ptipo == 2){
            this.tipo = "Utilitário"
        }else if(ptipo == 3){
            this.tipo = "comum";
        }else{
            this.tipo = "militar"
        }

    }
    //métodos para obter valores 
    getNome(){
        return this.nome;
    }
    getTipo(){
        return this.tipo;
    }
    //propriedades para mudar 
    setNome(nome){
        this.nome = nome;
    }
    setTipo(tipo){
        this.tipo = tipo;
    }
    info(){
        console.log(`O nome é ${this.nome} e o tipo é ${this.tipo}`)
    }
}

let meuCarro = new Carro("Próprio", 3)
meuCarro.info()
console.log(meuCarro.getNome())
meuCarro.setNome("Superveloz")
console.log(meuCarro)
meuCarro.setTipo("Gastador de gasolina")
console.log(meuCarro)

class Persona {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissão = profissao;
    }
}

let n1 = new Persona("Anjo", 23, "divino")
console.log(n1.nome)

// objetos literais
const Eu = {
    nome:"Anica",
    idade: 23,
    salario:13333,
    getNome:function(){
        return this.nome
    },
    setNome: function(nome){
        this.nome = nome;
    }
}
console.log(Eu.nome);

