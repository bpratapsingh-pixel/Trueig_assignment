const bikes = [
  { brand: "Yamaha", model: "FZ",    year: 2018, price: 90000 },
  { brand: "Honda",  model: "Hornet", year: 2019, price: 110000 },
  { brand: "TVS",    model: "Apache", year: 2020, price: 105000 }
];
const bikeNames = bikes.map(bike => bike.model+"-"+bike.model + "-" + bike.year);
console.log(bikeNames);
console.log(bikes);

const expensiveBikes = bikes.filter(bike =>bike.price > 100000);
console.log(expensiveBikes);
console.log(bikes);

const totalPrice = bikes.reduce((total, bike) => total + bike.price, 0);
console.log("Total Price of all bikes:", totalPrice);
console.log(bikes);

// const result = bikes.map(bike => bike.price)
//                     .filter(price => price > 100000)
//                     .reduce((total,price) => total +price ,0);
// console.log("Total price of expensive bikes:", result);

//filter & reduce & map diff + new array or updated array 
// teeno ek naya array return karte h
