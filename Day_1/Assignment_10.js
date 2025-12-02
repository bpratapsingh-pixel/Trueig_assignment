const students = [
  { id: 101, name: "Aman" },
  { id: 102, name: "Pooja" },
  { id: 103, name: "Rohan" }
];

const studentsIdAndName = students.reduce((acc,student)=>{
    acc.push({id:student.id,name:student.name});
    return acc;
}, [])

console.log("Students ID and Name:", studentsIdAndName);