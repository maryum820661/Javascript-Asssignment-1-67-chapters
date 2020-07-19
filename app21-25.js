//Assignment # 21-25 JAVASCRIPT

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName=prompt("Enter your first Name");
var lastName=prompt("Enter your last Name");

var fullName=firstName+" "+lastName;
alert(fullName);

//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var mobileModel=prompt("Enter the model of your favourite mobile phone");

alert("My favourite Mobile is "+mobileModel+" and length of string Length is "+mobileModel.length);

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

var string="PAKISTAN";
var index=string.indexOf("N");
document.write("Index of N in PAKISTAN is "+index);


//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var string="Hello World";
var index=string.lastIndexOf("l");
document.write("<br> Index of l from last is "+index);

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var string="Pakistani";
var char=string[3];
document.write("<br> The character which is present on third index of the word Pakistani is "+char);


//6. Repeat Q1 using string concat() method.
var firstName=prompt("Enter your first Name");
var lastName=prompt("Enter your last Name");
fullName=firstName.concat(lastName);
alert(fullName);


//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var city="Hyderabad";
var replacement  = city.replace("Hyder", "Islam");
document.write("<br> City: "+city);
document.write("<br> After Replacement "+replacement);

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace=message.replace(/and/g,"&");
document.write("<br>After Replacement "+replace);


//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var string="472";
document.write("<br> String:"+string);
var typeOfString=typeof string;
document.write("<br>Type "+typeOfString);
var number=parseInt(string,10);
document.write("<br> Number: "+number);
var typeOfNumber=typeof number;
document.write("<br>Type "+typeOfNumber);
//10.Write a program that takes user input. Convert and show the input in capital letters.
var string=prompt("Enter the string");
var capital=string.toUpperCase();
document.write("The String in Capital letter is"+capital);

//11. Write a program that takes user input. Convert and show the input in title case.
var string=prompt("Enter the String");
function titleCase(str) { 
    str = str.toLowerCase().split(' '); 
    for (var i = 0; i < str.length; i++) { 
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
    } 
    return str.join(' '); 
  } 
  document.write("The String in Title Case is "+titleCase(string)); 

//12.Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.
var num=35.36;
var string=num.toString();
string[2]=" ";
document.write("<br> The String is now"+string);

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
var userInput= prompt("Enter the username");
for(i=0;i<userInput.length;i++)
{
    if(userInput.charCodeAt(i)===33||userInput.charCodeAt(i)===44||userInput.charCodeAt(i)===46||userInput.charCodeAt(i)===64)
    {
      alert("Please Enter a Valid user name");
    }
}


//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
document.write("<h1>Search by User Input</h1><br>");
var userInput=prompt("Welcome to ABC backery!What do you want to order Sir/Ma'am");
var dishid,dish=false;
for(i=0;i<A.length;i++)
{
    if(userInput===A[i])
    {
        dishid=i;
        dish=true;
        break;
    }
}
if(dish===true)
{
document.write(userInput+" is available at "+"index "+dishid+"<br>");
}
else
{
document.write(userInput+" is not available in our backery <br>");
}


//15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

var password=prompt("Enter the Password");
var passwordValue;
if(password.length<6)
{
    alert("The Password must be atleast 6 characters long");
}
for(i=0;i<password.length;i++)
{
    if((password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57)||(password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90)||(password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122))
    {
        passwordValue=true;
    }
    else
    {
        passwordValue=false;
    }
}
if(passwordValue===false)
{
    alert("Password should contain only numbers and letters.");

}
if(password.charCodeAt(0)>=48 && password.charCodeAt(0)<=57)
{
    alert("The first character should not be a number");
}

//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

var string="University of Karachi";
string=string.split('');
for(i=0;i<string.length;i++)
{
    document.write("<br>"+string[i]);
}
//17. Write a program to display the last character of a user input.
var userInput=prompt("Enter the string");
var string=userInput[userInput.length-1];
document.write("<br> The Last Character of Input is "+string);

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
var string="the quick brown fox jumps over the lazy dog";
count=string.match(/the/g).length;
document.write("<br> Count of occurence of the in the string is"+count);