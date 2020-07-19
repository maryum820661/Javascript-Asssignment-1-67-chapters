//Assignment #05
//Math Expressions

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.


var num1=+prompt("Enter number 1");
var num2=+prompt("Enter number 2");
var result=num1+num2;
document.write("sum of "+num1+" and "+num2+" is "+result);

//2. Repeat task1 for subtraction, multiplication, division & modulus.
//subtraction
var num1=+prompt("Enter number 1");
var num2=+prompt("Enter number 2");
var result=num1-num2;
document.write("subtraction of "+num1+" and "+num2+" is "+result);

//Multiplication
var num1=+prompt("Enter number 1");
var num2=+prompt("Enter number 2");
var result=num1*num2;
document.write("Multiplication of "+num1+" and "+num2+" is "+result);

//Division

var num1=+prompt("Enter number 1");
var num2=+prompt("Enter number 2");
var result=num1/num2;
document.write("Division of "+num1+" and "+num2+" is "+result);

//Modulus
var num1=+prompt("Enter number 1");
var num2=+prompt("Enter number 2");
var result=num1%num2;
document.write("Modulus of "+num1+" and "+num2+" is "+result);

/*
3. Do the following using JS Mathematic Expressions
  a. Declare a variable. 
  b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
  c. Initialize the variable with some number. 
  d. Show the value of variable in your browser like “Initial value: 5”.
  e. Increment the variable. 
  f. Show the value of variable in your browser like “Value after increment is: 6”. 
  g. Add 7 to the variable. 
  h. Show the value of variable in your browser like “Value after addition is: 13”. 
  i. Decrement the variable.
  j. Show the value of variable in your browser like “Value after decrement is: 12”.
  k. Show the remainder after dividing the variable’s value by 3.
  l. Output : “The remainder is : 0”
  */
 var a;
 document.write("Value after variable declaration is "+a);
 a=5;
 document.write("value after initialization of variable is "+a);
 ++a;
 document.write("Value after increment is "+a);
 a=a+7;
 document.write("value after addition is "+a);
 --a;
 document.write("value after decrement is "+a);
 a=a%3;
 document.write("The remainder is"+a);

 //4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

 ticketPrice=600;
 noOfTickets=5;
 totalCost=ticketPrice*noOfTickets;
 document.write("Total cost to buy "+noOfTickets+" to a movie is "+totalCost);

 //5. Write a script to display multiplication table of any number in your browser. E.g

 table=+prompt("Enter the table you want to display ");
 document.write("<br>");
 for(i=1;i<=10;i++)
 {
     document.write(table+"x"+i+" = "+ table*i+"<br>");
 }
 /*6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC

*/

//Celcius to farenheit
var celciusTemp=25;
var farenheitTemp;
farenheitTemp=(celciusTemp*(9/5))+32;
document.write("NNoC is NNoF "+farenheitTemp);
//farenheit to celcius
var farenheitTemp=70;
celciusTemp=(farenheit-32)*(5/9);
document.write("NNoF is NNoC"+celciusTemp);


/*7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

a. Price of item 1 
b. Price of item 2 
c. Ordered quantity of item 1 
d. Ordered Quantity of item 2 
e. Shipping charges
Compute the total cost & show the receipt in your browser.
*/

var item1=650;
var item2=100;
var n1=3;
var n2=7;
var shippingCharges=100;
totalCost=(item1*n1)+(item2*n2)+shippingCharges;
document.write("Price of item 1 "+item1+"<br>");
document.write("Quantity of item 1 "+n1+"<br>");
document.write("Price of item 2 "+item2+"<br>");
document.write("Quantity of item 2 "+n2+"<br>");
document.write("Shipping Charges are"+shippingCharges);


//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var total_Marks=980;
var obtained_Marks=804;
var percentage=(obtained_Marks/total_Marks)*100;
document.write("The percentage of the student is"+percentage);


//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var no_Of_Us_Dollars=10;
var no_Of_Saudi_Riyals=25;
total_currency=no_Of_Us_Dollars*104.80+no_Of_Saudi_Riyals*28;
document.write("Total Currency in Pakistani rupees is"+total_currency);


//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression

var a=8;
result=((a+5)*10)/10;
document.write(result);


//11.The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.


var currentYear=2020;
var birthYear=1999;
age=2020-1999;
document.write("<h1>Age Calculator</h1>");
document.write("current year :"+currentYear);
document.write("Birth Year:"+birthYear);
document.write("Your age is"+age);

//12. The Geometrizer: Calculate properties of a circle.

var radius=20;
var pi=3.142;
var area=pi*radius*radius;
var circumference=2*pi*radius;

document.write("Radius of a circle is"+radius);
document.write("Area  of the circle is"+area);
document.write("Circumference of the circle is"+circumference);

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life.

var snake="chickenrole";
var age=20;
var max_age=70;
var estAmount=2;
var newAge=max_age-age;
var total=newAge*estAmount;
document.write("You will need"+ total + "to last you until the ripe old age of"+ max_age);





