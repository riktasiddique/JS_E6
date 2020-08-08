// const arry = [2,4,5,6,7,8,9];
// const output= [];
// for(let i= 0; arry.length > i; i++){
//     const element = arry[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


const number = [4,2,3,1,5,6];

// const result = number.map(function (element ){
//     return element * element;
// });
const squre = number.map(x=> x * x);
console.log(squre);
const filter = number.filter(x=> 2 < x);
console.log(filter);
const filter1 = number.find(x=> 3 < x);
console.log(filter1);


 