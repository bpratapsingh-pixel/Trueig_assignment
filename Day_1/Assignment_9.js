const users = [
  { name: "Bhanu", age: 23, city: "Indore" },
  { name: "Rishi", age: 27, city: "Indore" },
  { name: "Ayush", age: 29, city: "Delhi" }
];
 
const usersFromIndore = users.filter((user)=>{
    return user.city ==="Indore";
})
console.log("Users from Indore:", usersFromIndore);