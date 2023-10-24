// Question #7: Array Merging

const firstProductList = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 700 },
];

const secondProductList = [
  { id: 3, name: "Tablet", price: 500 },
  { id: 4, name: "Headphones", price: 150 },
];


let newProductList =[]
function arrayMerging(list) {
  for (let i = 0; i < list.length; i++) {
    newProductList =firstProductList.concat(list)
  }
  return newProductList
}
arrayMerging(secondProductList)
console.log(newProductList)

