// pegar todos os elementos que possuem essa tag

let colecaoHTML = document.getElementsByTagName('div');
colecaoHTML = [...colecaoHTML]

colecaoHTML.map((e,i)=>{
    e.innerHTML = i;
})

