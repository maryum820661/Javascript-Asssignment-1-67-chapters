//Assignment#12,13

//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var char;
var char=prompt("Enter any character of your choice");
if(char===char.toUpperCase())
{
document.write("It is an upper case character alphabet");
}
else if(char===char.toLowerCase())
{
    document.write("It is a lower case character alphabet");
}
else if (!isNaN(character * 1)){
    alert('character is numeric');
}



//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var num1=+prompt("Enter number1");
var num2=+prompt("Enter number2");

if(num1>num2)
{
    document.write(num1+"is greatest");
}
else{
    document.write("<br>"+num2+"is greatest")
}

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var number=+prompt("Enter the number");
var num2=5;
if(number-number==0&&number!=0)
{
document.write("The number is a negative number");
}
else if(number*num2==0)
{
    document.write("The number is a zero");
}
else{
document.write("The number is a positive number ")
}

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var char=prompt("Enter the character");
if(char==='A'||char==='A'||char==='A'||char==='E'||char==='I'||char==='O'||char==='U'||char==='a'||char==='e'||char==='i'||char==='o'||char==='u')

{
return true;
}
else{
return false;
}

/*5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give message “ Please enter your password”
ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
*/

var password="ab140134";

var userPassword=+prompt("Enter the password");
if(password=null)
{
    alert("Please Enter your password");
}
if(userPassword===password)
{
    alert("Correct,The Password you entered matches the original password");

}
else
{

    alert("In correct Password");
}

/*6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }
*/

 var greeting; 
 var hour = 13;
 if (hour < 18) 
 { 
 greeting = "Good day"; 
 alert(greeting);
 }
 else 
 {
 greeting = "Good evening"; 
 alert(greeting);
 }

 //7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

var time=+prompt("Enter the time in 24 clock format");
if(time===19)
{
    if(time>0&&time<12)
    {
        alert("Good Morning");
    }
    else if(time>=12&&time<17)
    {
      alert("Good After Noon");
    }
    else if(time>=17&&time<=21)
    {
        alert("Good Night");
    }
}

 