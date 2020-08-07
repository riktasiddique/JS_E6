const arry1 = [11 , 22, 13, 66, 44, 55];
const arry2 = [44,66,99,88,77,44,12];
const arry3 = [10,2,3,4,5,66,858,99,8];
// const  ages = arry1.concat(arry2).concat(arry3);
const ages = [...arry1, ...arry2, ...arry3];
console.log(ages);

// find the max arry element
const bussines = 650;
const minister = 850;
const memberOfParlament = 770;
const maximum = Math.max(bussines, minister, memberOfParlament);
console.log( maximum);

const large = [55,66,88,99];
const small = [1,2,3,5,6,69,9,8];
const max = Math.min(...large, ...small);
console.log(max);
const large1 = [55,66,88,99];
const max1 = Math.min(...large);
console.log(max1);
