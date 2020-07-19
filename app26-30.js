//Assignment # 26-30 JAVASCRIPT

/*
1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/
var userInput=+prompt("Enter the number");
document.write("<br>The number is "+userInput);
var roundedValue=Math.round(userInput);
document.write("<br>The rounded  number is "+roundedValue);
var floorValue=Math.floor(userInput);
document.write("<br>The floor number is "+floorValue);
var ceilValue=Math.ceil(userInput);
document.write("<br>The Ceil of the number is "+ceilValue);

/*2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/
var userInput=+prompt("Enter the number");
document.write("<br>The number is "+userInput);
var roundedValue=Math.round(userInput);
document.write("<br>The rounded  number is "+roundedValue);
var floorValue=Math.floor(userInput);
document.write("<br>The floor number is "+floorValue);
var ceilValue=Math.ceil(userInput);
document.write("<br>The Ceil of the number is "+ceilValue);

/*3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
*/
var userInput=+prompt("Enter the number");
var absValue=Math.abs(userInput);
document.write("<br>The value after doing the absolute is"+absValue);

/*
4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
*/
var randValue=Math.floor(Math.random() * 6) + 1;
document.write("<br>The value of the dice is"+randValue);



/*5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
*/
var randomValue=Math.floor(Math.random()*2)+1;
if(randomValue===1)
{
    document.write("<br>"+randomValue+"<br>"+"Random Coin Value :Tails");

}
else if(randomValue===2)
{
    document.write("<br>"+randomValue+"<br>"+"Random Coin Value :Heads");

}

//6. Write a program that shows a random number between 1 and 100 in your browser
var randValue=Math.floor(Math.random() * 100) + 1;
document.write("<br>The random value between 1 and 100 is "+randValue);


/*
7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms
*/
var userInput=prompt("Enter your weight!");
var parsedValue=parseInt(userInput);
document.write("<br>The weight of the user is "+parsedValue+" Kilograms");

/*
8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
*/
var userInput=+prompt("Enter the secret number");
var random=Math.floor(Math.random() * 10) + 1;
if(userInput===random)
{
    alert("Congratulations!You are Right");
}
else{
    alert("Try Again!");
}