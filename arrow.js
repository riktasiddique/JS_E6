// function add (num){
//     return num * 3;
// }
// const result = add(5);
// console.log(result);

// function expresion start 

// const doubleIt = function(a){
// return a *5;
// }
// const result = doubleIt(5);
// console.log(result);

// function expresion End

// E-6(Arrow) start

// single perameter
const arrow = num => num *3;
const result = arrow(5);
console.log(result);
// more than one perameter
const arrow2 = (a, b)=> a+b;
const result2 = arrow2(10, 10);
console.log(result2);
// empty perameter
const arrow3 = ()=>5;
const result3 = arrow3();
console.log(result3);
// large function
const big = (a,b)=> {
    const sum = a+b;
    const sub = a-b;
    const multi = sum - sub;
    return multi*5; 
}
const all = big(5 , 2);
console.log(all);