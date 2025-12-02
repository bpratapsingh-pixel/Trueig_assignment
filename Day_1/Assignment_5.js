const car = () =>{
    console.log("This is a car function");
}
car();

const bike = function( car){
    console.log("This is a bike function");
    car();
}
bike(car);

//arrow function binding and normal function binding, create two function greet and getUsername bind username ti greet 