// shopping discount calculation
let shoppingAmount = parseFloat(prompt("Enter the shopping amount:"));
let discount = 0;

if (shoppingAmount >= 10000) {
    discount = shoppingAmount * 0.1; // 10% discount

} else if (shoppingAmount >= 5000) {
    console.log("You are eligible for a 5% discount.");
    discount = shoppingAmount * 0.05; // 5% discount

} else {
    console.log("You are not eligible for a discount.");
}
 let finalAmount = shoppingAmount - discount;
console.log("Discount amount: $" + discount.toFixed(2));
    console.log("Final amount to pay: $" + finalAmount.toFixed(2));