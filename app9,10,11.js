//Assignment # 09,10,11

//User Input and Conditional Statements.


//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var cityName=prompt("Enter the city name");
if(cityName==='karachi'||'KARACHI'){
    alert("Welcome to the city of lights!");
}
//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender=prompt("Enter the gender.Enter 'M' for Male and 'F' for female");
if(gender==='M')
{

    alert("Good Morning Sir!");
}
else if(gender==='F')
{
    alert("Good Morning Maam");
}

//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

var color=prompt("Enter the color of the traffic signal");
if(color==='red')
{
    alert("Must Stop");
}
else if(color==='yellow')
{
    alert("Ready to Move");
}
else if(color==='green')
{
    alert("Move on");
}
//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var fuel=+prompt("Enter the amount of remaining fuel in liters");
if(fuel<0.251)
{
    alert("Please refill the fuel in your car");
}
//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a
var a = 4; 
if (++a === 5)
{ 
 alert("given condition for variable a is true");
}
//This code runs.

//b.
var b = 82;
 if (b++ === 83)
 { 
     alert("given condition for variable b is true"); 
 }
//This code doesnot run as the condition is not met.
//c

var c = 12; 
if (c++ === 13)
{ 
alert("condition 1 is true"); 
} 
//doesnot run.
if (c === 13)
{ 
alert("condition 2 is true");
} 
//code runs.
if (++c < 14)
{ 
alert("condition 3 is true");
}
//code doesnot run.
if(c === 14)
{ 
alert("condition 4 is true");
}
//code runs.

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)
{ 
alert("The cost equals");
}
//the code runs

//e.
if (true)
{ 
alert("True");
} 
if (false){
alert("False");
}

//code runs

//f.

if("car" < "cat")
{
 alert("car is smaller than cat");
}
//code does run.


//6.Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

document.write("<h1><Marks Sheet</h1>")
var marks1=+prompt("Enter the marks of subject1");
var marks2=+prompt("Enter the marks of subject2");
var marks3=+prompt("Enter the marks of subject3");
var total=300;
obtainedMarks=marks1+marks2+marks3;
percentage=(obtainedMarks/total)*100;

if(percentage>=80)
{
    document.write("Total Marks"+total+"<br>");
    document.write("Marks Obtained"+obtainedMarks+"<br>");
    document.write("Percentage:"+percentage+"<br>");
    document.write("Grade: A-One <br>");
    document.write("Remarks:Excellent")
}
else if(percentage>=70)
{
    document.write("Total Marks"+total+"<br>");
    document.write("Marks Obtained"+obtainedMarks+"<br>");
    document.write("Percentage:"+percentage+"<br>");
    document.write("Grade: A <br>");
    document.write("Remarks:Good");

}
else if(percentage>=60)
{
    document.write("Total Marks"+total+"<br>");
    document.write("Marks Obtained"+obtainedMarks+"<br>");
    document.write("Percentage:"+percentage+"<br>");
    document.write("Grade: B <br>");
    document.write("Remarks:You need to improve");

}
else if(percentage<60)
{
    document.write("Total Marks"+total+"<br>");
    document.write("Marks Obtained"+obtainedMarks+"<br>");
    document.write("Percentage:"+percentage+"<br>");
    document.write("Grade: Fail <br>");
    document.write("Remarks:Sorry");
}

/*
7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
*/
var number=+prompt("Enter the number ranging between 1 and 10");
var secret_number=5;
if(number==secret_number)
{
    alert("Bingo!Correct answer");

}
if(++number==secret_number)
{
    alert("close enough to the correctt answer");

}

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var number=+prompt("Enter the no to be checked");
if(number%3==0)
{
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}
//9. Write a program that checks whether the given input is an even number or an odd number.
var number=+prompt("Enter the no to be checked for even or odd");
if(number%2==0)
{
    alert("The number is  even");
}
else{
    alert("The number is odd");
}

//10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”

var Temp=+prompt("Enter the temperature");
if(Temp>40)
{
    alert("Its too hot outside!");
}
else if(Temp>30)
{
    alert("The Weather today is normal");

}
else if(Temp>20)
{
    alert("The Weather today is cool!");

}
else if(Temp>10)
{
    alert("OMG!The weather is so cool");
    
}

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

var num1=+prompt("Enter the number1");
var num2=+prompt("Enter the number2");
var opr=prompt("Enter the operation to be performed");
if(opr==='+')
{
result=num1+num2;
document.write("The addition of "+num1+" and " +num2+ " is" +result);

}
else if(opr==='-')
{
result=num1-num2;
document.write("The subtraction of "+num1+" and " +num2+ " is" +result);

}
else if(opr==='*')
{
result=num1*num2;
document.write("<br>The Multiplication of "+num1+" and " +num2+ " is" +result);
}
else if(opr==='/')
{
result=num1/num2;
document.write("The division of "+num1+" and " +num2+ " is" +result);
}
else if(opr=='%')
{
result=num1%num2;
document.write("The remainder of "+num1+" and " +num2+  " division is" +result);
}
else
{

    document.write("You Entered wrong operator");
}