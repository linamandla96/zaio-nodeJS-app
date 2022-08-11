
const fs = require('fs');


const getStudent = function(){
    console.log("Getting students");
}
 
const addStudents = function(name,age,Class){
   const student = loadStudent();
   const duplicateData = student.filter(function(student){


    return student.name === name;
   })

   if(duplicateData.length===0){

    student.push({
        name: name,
        age: age,
        class: Class
      
  })
  
     saveStudent(student)
   }else{
    console.log("record already in system")
   }
   
   
   console.log("add student");
}


const removeStudent = function(name){
    console.log("removing  " + name)

    const students = loadStudent();

    const newStudent = students.filter(function(students){
 
     return students.name !== name;
    
    });
 
    saveStudent(newStudent);


}

const listStudent = () =>{
    const student = loadStudent();

   student.forEach(student => {
    console.log("Name :" + student.name +", Class " + student.class +", Age:" + student.age)
   });

}


const loadStudent = function(){

    try{
 const dataBuffer = fs.readFileSync('students.json')
  const JSONdata = JSON.parse(dataBuffer.toString())
  

  return JSONdata;
    }catch(e){

        return []
    }


}

const saveStudent = function(students){
    
    const stringData = JSON.stringify(students);
    fs.writeFileSync('students.json',stringData);

}


//console.log(loadStudent())



module.exports = {
    getStudent: getStudent,
    addStudents : addStudents,
    removeStudent:removeStudent,
    listStudent: listStudent

}
