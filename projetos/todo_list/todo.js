const tarefa = document.getElementById('tarefa');
const adcionar = document.
getElementById('adicionar');
const pegarTarefa = document.getElementById("pegarTarefa");
const listaTarefas = document.getElementById('lista');

adcionar.addEventListener('click',()=>{
    let tarefaCriada = tarefa.value;
    let caixaUnica = document.createElement("div");
    caixaUnica.className = 'caixaUnica';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = tarefaCriada;
    checkbox.id = `tarefa-${Date.now()}`;

    const label = document.createElement('label');
    label.textContent = tarefaCriada;
    label.setAttribute =('for', checkbox.id)
    caixaUnica.append(checkbox,label)
    listaTarefas.append(caixaUnica)
    tarefa.value = '';
})
