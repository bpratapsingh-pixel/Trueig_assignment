const arr = [1,2,3,5,6];
//spread operator 
const newArr = [2,4,5, ...arr]// swallow coping, iterable
console.log(newArr);

//destructure operator
const user = {
    name:"Ram Babu",
    email:"ram@gmail.com",
    password:"12345",
    address:"Indore",
    mobile:"23423434"
}
const {name,email,password,address,mobile,...rest} = user;//unpack kar deta h arr or object ,remove this problem calling by .
console.log(name,email,password,address,mobile)
console.log(rest)

//rest operator
// const user = {
//     name:"Ram Babu",
//     email:"ram@gmail.com",
//     password:"12345",
//     address:"Indore",
//     mobile:"23423434"
// }
// const {name,email, ...rest} = user;// collect infinite no. of argument or left argument
// console.log(rest)
