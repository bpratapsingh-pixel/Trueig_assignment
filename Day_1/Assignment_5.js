const car = () =>{
    console.log("This is a car function");
}
car();

const bike = function( car){
    console.log("This is a bike function");
    car();
}
bike(car);