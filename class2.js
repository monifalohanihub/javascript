// login Aunthentication

let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

let validUsername = "admin";
let validPassword = "admin@123";

if (username === validUsername && password === validPassword) {
  alert("Login successful!");
} else {
  alert("Invalid credentials");
}