const bikes = [
  { brand: "Yamaha", model: "FZ",    year: 2018, price: 90000 },
  { brand: "Honda",  model: "Hornet", year: 2019, price: 110000 },
  { brand: "TVS",    model: "Apache", year: 2020, price: 105000 }
];
const bikeNames = bikes.map(bike => bike.model+"-"+bike.model + "-" + bike.year);

console.log(bikeNames);

const expensiveBikes = bikes.filter(bike =>bike.price > 100000);
console.log(expensiveBikes);

const totalPrice = bikes.reduce((total, bike) => total + bike.price, 0);
console.log("Total Price of all bikes:", totalPrice);

