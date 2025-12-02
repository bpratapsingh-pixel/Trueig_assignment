// const car = () =>{
//     console.log("This is a car function");
// }
// car();

// const bike = function( car){
//     console.log("This is a bike function");
//     car();
// }
// bike(car);

//arrow function binding and normal function binding, create two function greet and getUsername bind username ti greet 
// arrow function ke pass apna this nhi hota h ye borrow karta and normal function ke pass hota h

function getUsername(){
    
    return "Rajiv Sharma";
}

function greet(city){
    let msg = "Hello! My name is " + getUsername() + ". I am from " + city;
    console.log(msg);
}
greet.call("delhi")
const g = greet.bind();
g("london");