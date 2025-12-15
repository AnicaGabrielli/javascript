// herança - A classe herda métodos e propriedades da classe pai

class Carro{ //classe Pai
    constructor(nome, portas){
        this.nome = nome,
        this.portas = portas,
        this.ligado = false,
        this.vel = 0,
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor;
    }
}
// herança
class Militar extends Carro{
    constructor(nome,portas,blindagem, municao){
        //invocar a sincronicidade com os parametros da classe pai
        super(nome, portas)
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor('verde')
    }
    atirar = function(){
        if(this.municao>0){
            this.municao--
        }
    }

}

const c1 = new Carro("normal",4);

const c2 = new Militar("Carro de Herança", 45, 100, 50);
c2.ligar()
console.log(c2)
c2.setCor("Azul")
