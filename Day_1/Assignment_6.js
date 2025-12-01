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
