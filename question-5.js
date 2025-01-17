// Question 5: Calculating Total Price in User's Cart


let totalPrice=0;

function calculateTotalPrice(cart) {
totalPrice = cart.reduce(function (accumulator,currentValue){
return accumulator + currentValue.price * currentValue.quantity;
}, 0)
return  totalPrice
}


// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50

