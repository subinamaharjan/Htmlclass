/*function hello(){
    const name="this is js";
    const a=15;
    console.log(`${name}`);
}
hello()
function fibonacci(){
    const number =5;
    let n1=0 , n2=1 ;
    let n3;
    console.log('Fibonacci Series');
    for(let i=1; i<=number; i++){
        console.log(n1);
        n3=n1+n2;
        n1=n2;
        n2=n3;

    }
}
// fibonacci()

function fibo(n){
    if(n<2){
        return 1;
    }else{
        return (fibo(n-1)+fibo(n-2));
    }
}
for(let i=0;i<20;i++){
    console.log(fibo(i));

}
*/
function forVarations(){
    animals={
        name: "Dog",
        type: "mammal",
        kingdom: "animal",
    };
    for(n in animals) {
        console.log(`Animals ${n}`);
    }
    /*let petName = "shadow";
    let allDogSpecies =[ "sheperd","pitbull","husky"];
    for(let singleton of petName){
        console.log(`pet Letters\n ${singleton}`);
    }
    for(let singleton of a allDogSpecies){
        console.log(`Dog species \n ${singleton}`);

    }
})();

let fibonacci = (a,b)=> {
    console.log("1");
};*/
