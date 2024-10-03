// Prompt the user to enter their age
let age = prompt("Enter your age:");

// Convert the input to a number
age = Number(age);

// Use an if-else structure to categorize the user
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else if (age >= 20) {
    console.log("You are an adult.");
}
