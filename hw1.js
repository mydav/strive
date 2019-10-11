/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
​
​
/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/
​
var num = 11;
do {
    num += 1;
    console.log(num)
}
while (num < 20)
​
/* EXERCISE 2
Create a variable named X containing the number 12
*/
​
var x = 12;

​
/* EXERCISE 3
Create a variable named name containing the string John Doe
*/
​
var name = "John Doe";
​
/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/
​
console.log(12 - x);
​
/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/
​
var name1 = 'john'
var name2 = 'John'
name1 === name2
name1.toLowerCase() === name2.toLowerCase()
​
/* EXERCISE 6
Create and array with the first 5 positive numbers
*/
​
var array = [1,2,3,4,5];
​
/* EXERCISE 7
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/
​
var x = 5;
switch (x) {
    case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;
  case 5:
    console.log("Five");
}

var x = 6;
var number_array = ["One", "Two", "Three", "Four", "Five"];
var result_text = "None";
if(x<6 && x>0){
    result_text = x + " => " + number_array[x-1];
} else if (x>5 && x<11) {
        result_text = x + " => Five + " + number_array[x-6];
  }
var result = result_text;
console.log("literal ", result);
​
/* EXERCISE 8 
Insert a value in a variable based on the resut of a ternary if
*/
​
(x > 3) ? (x = 3, console.log("You cannot take more than 3 items!")) : (console.log("You have " + x + " items"));

/* EXERCISE 9
Create an object containing your name, surname, email address and age.
*/
​
var bio1 = {name:"Vadym", surname:"Bardukov", email:"19vad91@gmail.com", age:28};
​
/* EXERCISE 10
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
​
bio1.driverLicense = true;
​
/* EXERCISE 11
Remove to the previously created object the age
*/
​
delete bio1.age;
​
/* EXERCISE 12
Create a second object with name, surname, email address and verify that this object has a different email address
*/
​
var bio2 = {name:"Vadym", surname:"Bardukov", email:"19vad91@gmail.com", age:28};
(bio1.email == bio2.email) ? (console.log("This email already exists")) : (console.log(true));

​
/* EXERCISE 13 
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
​
var totalShoppingCart = 39;
(totalShoppingCartl >= 50) ? (console.log("You have free shipping!")) : (console.log("Your cost with shipping" + totalShoppingCart + 10));
​
/* EXERCISE 14
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
​
var totalShoppingCart = 55;
(totalShoppingCartl >= 50 - (50 * 20 / 100)) ? (console.log("You have free shipping!")) : (console.log("Your cost with shipping" + totalShoppingCart + 10));
​
/* EXERCISE 15
You writing a very simple anti spam filter for your mailbox. In the variable emailContent you have the content of the email you are checking.
Check if the email is valid using regular expression. The email (in this example) if the words SPAM and SCAM does not appear.
*/
​
var = emailContent = "This is scam!"

​
/* EXERCISE 16
Create an object rapresenting an car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 17
Create a new array called carsForRent containing all the cars from the previous exercise
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 18
Remove the first and the last car from the carsForRent array.
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 19
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
​
/* WRITE YOUR CODE HERE */
​
/* EXERCISE 20
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
​
/* WRITE YOUR CODE HERE */
​
/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/