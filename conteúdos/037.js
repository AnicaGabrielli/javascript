/*

Os elementos possuem uma relação entre si. O elemento pai tem vários filhos que se encontram entre a "first child" e a "last child".

- parent node : elemento pai
- siblins : elementos irmãos 

*/
const caixa1 = document.querySelector("#caixa1");
const btn_c =[...document.querySelectorAll(".curso")];

console.log(btn_c);
console.log(caixa1.children);
console.log(caixa1.children[0])
console.log(caixa1.children[caixa1.children.length -1])
console.log(caixa1.firstChild)
console.log(caixa1.firstElementChild)
console.log(caixa1.lastChild)
console.log(caixa1.lastElementChild)
console.log(document.getRootNode())
console.log(btn_c[0].getRootNode());
console.log(btn_c[0].ownerDocument)


// método para verificar se o elemento tem algum filho

console.log(caixa1.hasChildNodes())

console.log(caixa1.hasChildNodes() ? "Tem fillhos": "Não possui filhos")

console.log(btn_c[0].hasChildNodes() ? "tem filhos": "Não tem filhos")

console.log(btn_c[0].children.length > 0 ? "Possui Filhos" : "Não possui filhos") 

// alterando conteúdo do elemento 

console.log(caixa1.firstElementChild.innerHTML = "TESTE");

console.log(caixa1.children[1].innerHTML = "SEGUNDO TESTE");

// avô de um elemento

console.log(btn_c[1].parentNode.parentNode)

