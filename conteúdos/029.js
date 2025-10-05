/**
 * A função construtora 'aluno' cria instâncias de objetos que representam alunos.
 * O 'this' é usado aqui para referir-se à instância do objeto criada por esta função.
 */
function aluno(nome, nota) {
    // O 'this' refere-se à instância do objeto criada por 'new aluno()'.
    this.nome = nome; // Atribuímos o nome do aluno à propriedade 'nome' da instância.
    this.nota = nota; // Atribuímos a nota do aluno à propriedade 'nota' da instância.

    /**
     * O método 'dados_arrow' exibe as informações do aluno após 5 segundos.
     * Utilizamos uma Arrow Function para garantir que o 'this' continue
     * apontando para a instância de 'aluno', mesmo dentro do setTimeout.
     */
    this.dados_arrow = function () {
        // A Arrow Function herda o 'this' do contexto léxico (a função 'dados_arrow').
        setTimeout(() => {
            // Aqui, 'this' refere-se ao objeto 'aluno' criado.
            console.log(this.nome); // Acessa a propriedade 'nome' da instância.
            console.log(this.nota); // Acessa a propriedade 'nota' da instância.
        }, 5000);
    };
}

// Criamos uma instância do objeto 'aluno' com nome 'anica' e nota 2.
const aluno1 = new aluno("anica", 2);

// Chama o método 'dados_arrow', que exibirá os dados após 5 segundos.
aluno1.dados_arrow();

