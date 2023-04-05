const liste =[2,3,5,2,7,-8];
liste[0]=10;
for (let i=0; i<liste.length; i++){
    console.log(liste[i]);
}
for(let i of liste){
    console.log(i);
}
const lengde= liste.length;
liste.push(23);
liste.splice(1, 2);
liste.sort();
//position
const posisjon= liste.indexOf(23);

console.log(liste);
console.log(posisjon);
