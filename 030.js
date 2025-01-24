// pegar elemento pelo id
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const arrayElements = [c1, c2, c3];
c1.style.textAlign = "center"
c1.innerHTML = (c1.id +" "+ c1.innerHTML);

for(v of arrayElements){
    v.style.color = 'blue';
}

arrayElements.map((z,q)=>{
    z.style.color = 'green';
})
