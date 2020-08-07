class Parent {
    constructor(){
        this.fatherName = "Siddik";
    }
}
class Child extends Parent{
    constructor(myName){
        super();
        this.name= myName;

    }
    getFullname(){
        return this.name + " " + this.fatherName;
    }
}
const baby =new Child("rikta");
const baby2 =new Child("Sakib");
console.log(baby.getFullname());
console.log(baby2.getFullname());