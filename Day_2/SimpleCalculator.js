let x=10, y=10;

let id = 3;
const add = (x,y) => x+y;

const subtract = (x,y) => x-y;

const multiply = (x,y) => x*y;

const divide = (x,y) => x/y;
switch(id){
    case 1:
        console.log("Addition:", add(x,y));
        break;
    case 2:
        console.log("Subtraction:", subtract(x,y));
        break;
    case 3:
        console.log("Multiplication:", multiply(x,y));
        break;
    case 4:
        if(y===0){
            console.log("Division by zero is not allowed");
            break;
        }
        console.log("Division:", divide(x,y));
        break;
    default:
        console.log("Invalid operation id");

}


