let Car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    displayInfo: function() {
        console.log(`Car Info: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

Car.displayInfo();

class Bike {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Bike Info: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

let bike = new Bike("Yamaha", "FZ", 2019);
bike.displayInfo();
 
//spread operator & rest operator & destructuring

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10];

const mergedarr = [...arr1,...arr2];//spread operator
console.log(mergedarr)
const employee = { 
    name: "Bhanu pratap singh",
    mobile: "6263466850",
    address: "Indore",
    gender: "Male"
}
const {name, mobile, ...rest} = employee;//rest operator and destructure

console.log("employee name :"+name+"and mobile no."+mobile)
console.log(rest);