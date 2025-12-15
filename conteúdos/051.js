// coleção set. Essa coleção não permite entrada duplicadas de valores

// é possível adicionar elementos no próprio construtor

let musicas = new Set(["musica1", "musicaboa", "musica10"]);


// adicionar elementos. mesmo utilizando a função de adcionar, valores que já existem não são adcionaados. 
musicas.add("musica muito legal");
musicas.add("musica1");
musicas.add("musicaboa");

console.log(musicas)

musicas.forEach((el)=>{
    console.log(el)
})

// para deletar 
musicas.delete("musica1")
for(let m of musicas){
    console.log(m)
}
//limpar toda coleção
musicas.clear();

