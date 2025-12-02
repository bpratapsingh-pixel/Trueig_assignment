// const students = [
//   { id: 101, name: "Aman" },
//   { id: 102, name: "Pooja" },
//   { id: 103, name: "Rohan" }
// ];

// const studentsIdAndName = students.reduce((acc,student)=>{
//     acc.push({id:student.id,name:student.name});
//     return acc;
// }, [])

// console.log("Students ID and Name:", studentsIdAndName);

//callback function explation 
function display(sum){
    console.log("sum is:", sum);
}
function addition(x,y,callback){
    let sum = x+y;
    callback(sum);
}
addition(10,20,display);