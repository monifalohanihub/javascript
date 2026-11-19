// find even and odd numbers from 1 to 100 and count total number of even and odd numbers
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenCount++;
        console.log(i + " is an even number");
    } else {
        oddCount++;
        console.log(i + " is an odd number");
    }
}

console.log("Total even numbers: " + evenCount);
console.log("Total odd numbers: " + oddCount);