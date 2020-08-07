// class student{
//     constructor(){
//         this.id = 1;
//         this. name = "rikta";
//     }
// }
// const  student1 =new student();

// const  student2 =new student();
// console.log(student1 , student2)
class Student{
    constructor(sId, name){
        this.id = sId;
        this.name = name;
    }
}

const student1 = new Student(22, "rikta");
const student2 = new Student(23, "hamza");
console.log(student1 , student2);
