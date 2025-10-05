function soma(n1, n2) {
    console.log(n1+n2)
}

soma(1223, -(1222*2));

// nesse caso, mesmo  que eu não passe algum valor na chamada
// da função, ela vai fazer o cálculo com os valores parões
// que foram passados na declaração
function soma2(n1 = 0, n2 = 0) {
    
    console.log(n1+n2)
}
soma2(10)
