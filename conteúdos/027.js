/**
 * Uma função geradora é uma função especial em JavaScript que pode ser pausada e retomada. 
 * Utiliza o símbolo '*' ao ser declarada e a palavra-chave 'yield' para retornar valores 
 * de forma incremental. Quando chamada, ela retorna um iterador, permitindo que sua execução 
 * prossiga passo a passo ao usar o método 'next()'. Ideal para trabalhar com fluxos de dados 
 * ou processamento controlado de valores.
 */

// exemplo 1
function* contagem(){
    i = 1;
    while(true){
        yield i++;
    }
}

const iterador = contagem();

for(let i = 0; i<20; i++){
    console.log(iterador.next().value);
}

// exemplo 2
/**
 * Valores podem ser enviados para um gerador a partir do segundo `next()`, pois o primeiro 
 * `next()` apenas inicia a execução até o primeiro `yield`. Somente após isso, o valor passado 
 * para o próximo `next(valor)` é atribuído ao `yield` anterior.
 */

function* perguntas(){
    const nome = yield 'qual seu nome?'
    const esporte = yield 'qual seu esporte preferido?'
    return `\nSeu nome é ${nome} e seu espote preferido
    é ${esporte}`;
}
const respostas = perguntas();
console.log(respostas.next().value)
console.log(respostas.next('gabi').value)
console.log(respostas.next('natação').value)