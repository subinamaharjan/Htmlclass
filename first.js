function add(a,b){
    return a+b;
}
console.log("total sum is:",add(3,4));


function name(){
    const mess="this is js";
}
name();
let a =100;
console.log(`this is value of ${a}`);

for( let i=0;i<10;i++){
    console.log(i);
}
const array = ['apple','pie','mango','orange']
for(let i=0; i< array.length;i++){
    console.log(array[i]);
}
let b={name:'js'}
b.name

function name(a,b){
if (a+b>10) {
    console.log("display it is greatest");
    return a+b;
} else {
    console.log("it is least");
    return a+b;

}
}
name(4,5);

function cmp(d,e,...f){
    if (d==e) {
        console.log("true");
    } else {
        console.log("false");
    }
    console.log(f)
}
cmp(3,'3',1,6,89);
function heelo(){
    const name='hi this is js';
    let sum=0;
    const a=15,b=15;
    console.log(`type of name ${typeof name}`);
}









