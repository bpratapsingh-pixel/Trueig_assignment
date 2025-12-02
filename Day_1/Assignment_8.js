const products = [
  { id: 1, name: "laptop", price: 50000 },
  { id: 2, name: "phone", price: 20000 },
  { id: 3, name: "tablet", price: 30000 }
];

const productsName = products.map(product =>{
    return product.name.toUpperCase();
}) 
console.log("Product Names in Uppercase:", productsName);