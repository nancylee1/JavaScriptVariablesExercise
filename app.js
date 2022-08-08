//Exercise 1: Declaring Variables

const firstName = "Nancy";
let lastName = "Lee";
var age = 40;
let exercise1 = document.getElementById("exercise1");
exercise1.innerHTML = `${firstName} ${lastName} ${age}`;

//Exercise 2: Assigning Values to Variables

// let fullName = firstName + " " + lastName;
// console.log(fullName);

//Bonus
let fullName = `${firstName} ${lastName}`;
let city = "New York";
let passTime = "singing";
let myStory = `Hello! My name is ${fullName} and I am from ${city}. I enjoy ${passTime}, biking, and coding!`;
let exercise2 = document.getElementById("exercise2");
exercise2.innerHTML = myStory;


//Exercise 3: Declaring and Assigning Values to Variables
let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;
let exercise3 = document.getElementById("exercise3");
exercise3.innerHTML = `${language} was created in ${createdYear}.`;
// console.log('${language} was created in ${createdYear}.')

//Exercise 4: Declaring and Assigning Values to Variables x2

let item = "Nike Shirt"
let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";
let exercise4 = document.getElementById("exercise4")
exercise4.innerHTML = `The ${item} is on sale for ${price} at ${salePercentage}% off in the size ${selectedSize} and stock level is ${stock}.`;

//Exercise 5: Declaring and Assigning Values to Variables x3

let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let paceCount = 722;
let bookmark = 456;
let hasRead = true; 
let exercise5 = document.getElementById("exercise5")
exercise5.innerHTML =  `The book ${title} by ${author} has a pace count of ${paceCount} and bookmarked at page ${bookmark}.`;
