   const student =[
       {name: "rikta" , id:171, age: 21},
       {name: "tomal" , id:131, age: 23},
       {name: "nushu" , id:141, age: 23},
       {name: "suraiya" , id:161, age: 22},

   ]
   const name = student.map(s => s.name)
   const id = student.map(s => s.id)
   const big = student.find(s => s.id > 131)
   console.log( big );

// const name = student;
//    for(let i= 0; i> name.length; i++){
//        const element =  name[i];
//        console.log(element);
//    }