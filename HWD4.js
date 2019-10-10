<html>
​
<head>
    <script>
        /*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - Load the HTML into your fav browser and call the function by name (es.: area(12, 23))
    */
​
        /* EXERCISE 1 (EXAMPLE)
            Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
            */
​
        function area(l1, l2) {
            return l1 * l2;
        }
​
        /* EXERCISE 2
            Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
            */
​       
        function crazySum(a1,a2) {
            return (a1 == a2) ? (3 * (a1 + a2)) : (a1 + a2);
        }
    
​
    /* EXERCISE 3
    Write a function "crazyDiff" that computes the 
    absolute difference between a given number and 19. 
    Returns triple their absolute difference if 
    the specified number is greater than 19.
    */
​
    function crazyDiff(a1) {
        return (a1 >= 19) ? (3 * (19 - a1)) : (19 - a1);
    }
​
        /* EXERCISE 4
    Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
    */
​
    function boundary(N) {
        return (N >= 20 && N <= 100 || N == 400) ? (true) : (false);
    }

    console.log(boundary(400));
​
​
        /* EXERCISE 5
    Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 6
    Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
    HINT: Module Operator
    */
​
    function check3and7(N) {
        return (N % 3 == 0 || N % 7 == 0) ? (true) : (false);
    }

    console.log(check3and7(21));
​
        /* EXERCISE 7
    Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
    */
​
    function reverseString(string) {
        return .split("").reverse().join("");
    }

    console.log(reverseString("12345678"));    

​
        /* EXERCISE 8
    Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
    */
​
    function upperFirst(string) {
        var splitString = string.toLowerCase().split(' ');
        for (var i = 0; i < splitString.length; i++) {
            // You do not need to check if i is larger than splitString length, as your for does that for you
            // Assign it back to the array
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);     
        }
        return splitString.join(' '); 
    }

    console.log(upperFirst("some random text")); 
​
        /* EXERCISE 9
    Write a function "cutString" to create a new string without the first and last character of a given string.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 10
    Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 11
    Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
    The function returs the sum of the numbers bigger than 5.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 12
    In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
    Create a function "shippingCartTotal" which calculates the total due to the shop.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 13
    In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
    Create a function "addToShoppingCart" which receives a new object and add it to shoppingCart and returns the number of items in the shoppingCart.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 14
    In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
    Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 15
    In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
    Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 16
    Create a function "loopUntil" which receives an integer X between 0 and 9.
    The function loops and prints a random number between 0 and 9 until the random number is bigger than X three times in a row.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 17
    Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 18
    Write a function "longest" to find the longest string from an given array of strings.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 19
    Write a function that receives a date D as parameter and calculates the number of days passes since the D.
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* EXERCISE 20
    Write a function "matrixGenerator" that receives X and Y as parameter. The result should be a matrix of X times Y with, as value, the index of the position.
    Ex.: X = 3, Y = 2
    ["00","01","02"
     "10","11","12"]
    */
​
        /* WRITE YOUR CODE HERE */
​
        /* WHEN YOU ARE FINISHED
          Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
          */
    </script>
​
    <style>
        body {
            background: #181818;
            color: white;
            max-width: 750px;
            margin: 0 auto;
            padding-top: 50px;
        }
​
        h1,
        h2 {
            text-align: center;
        }
​
        h2 {
            color: rgb(239, 61, 89);
        }
    </style>
</head>
​
<body>
    <h1>Homework</h1>
    <h2>M1-D4</h2>
</body>
​
</html>
Collapse



