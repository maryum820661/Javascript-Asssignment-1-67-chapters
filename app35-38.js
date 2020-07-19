//Assignment # 35-38
//JAVASCRIPT

//FUNCTIONS

//1. Write a function that displays current date & time in your browser.

function CurrentDate()
{

    var d=new Date();
    return d;
}

document.write("<br><h1>"+CurrentDate()+"</h1>");


//2. Write a function that takes first & last name and then it greets the user using his full name.

function FullName(firstName,lastName)
{
    var fullName=firstName+" "+lastName;
    return fullName;
}

alert("Good Morning"+FullName("Maryum","Sheikh"));

//3. Write a function that adds two numbers (input by user)and returns the sum of two numbers.
function AddNumbers(num1,num2)
{

var result=num1+num2;
return result;

}
document.write("<br>The sum of the numbers is"+AddNumbers(5,4));

//4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and  show the desired result in your browser.

function Calculator(num1,num2,operator)
{
    var result;
    if(operator==='+')
    {
        result=num1+num2;
    
    }
    else if(operator==='-')
    {
        result=num1-num2;
    
    }
    else if(operator==='/')
    {
        result=num1/num2;
    
    }
    else if(operator==='*')
    {
        result=num1*num2;
    
    }
    return result;
}

document.write("<br>The Result made by the Calculator is "+Calculator(5,4,"+"));

//5. Write a function that squares its argument.

function Square(num)
{
var result=num*num;
return result;

}
document.write("<br> The Square of the number is "+Square(4));

//6. Write a function that computes factorial of a number.
var sum=0;
function Factorial(number)
{
var fact;
for(i=1;i<number;i++)
{
    
fact=number*i;
sum=sum+fact;
}

return sum;
}
document.write("<br> The Factorial of the number is "+Factorial(4));


//7. Write a function that take start and end number as inputs & display counting in your browser.

function Counting(firstNumber,lastNumber)
{
    for(i=firstNumber;i<=lastNumber;i++)
    {
        document.write("<br>"+i);
    }
}
document.write("<br><h1>Counting</h1>");
Counting(12,19);

/*8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
function | JAVASCRIPT
Page 2 of 4
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/

function calculateHypotenuse(base,perpendicular)
{
    function Square(x)
    {
     
     return x*x;
    }
    Result=Square(base)+Square(perpendicular)
    return Result;
}
document.write("<br>The hypoteneous of the right angle triangle is"+calculateHypotenuse(4,3));


/*9. Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
i. Arguments as value
ii.Arguments as variables*/
function calculateArea(width,height)
{
    var Area=width*height;
    return Area;
}
var Height=15;
var Width=3;

document.write("<br>"+"The Area of The Triangle by Passing Arguement as value  is "+calculateArea(Height,Width));
document.write("<br>"+"The Area of The Triangle by Passing Arguement as variable  is "+calculateArea(7,4));


//10. Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as
//forward, e.g., madam.

function Palindrome(string)
{
    var newString="";
   for(i=string.length-1;i>=0;i--)
   {
     newString+=string[i];
   }
   if(string===newString)
   {
       document.write("<br>Its a Palindrome");
   }
   else
   {
       document.write("<br>Its not a Palindrome");
   }
}
Palindrome("madam");

/*11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'*/

function titleCase(str) { 
    str = str.toLowerCase().split(' '); 
    for (var i = 0; i < str.length; i++) { 
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
    } 
    return str.join(' '); 
  } 
  document.write("<br> The String in Title Case is "+titleCase('the quick brown fox')); 

/*12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'*/
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write("<br>"+find_longest_word('Web Development Tutorial'));

/*13. Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
function | JAVASCRIPT
Page 3 of 4
occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'*/

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("<br>The occurence of the letter in the string is "+char_count('Maryam','a'));


/*14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle = πr2
*/
document.write("<h1>Geometrizer</h1>");
function calcCircumference(radius)
{
    var pi=3.142;
    var circumference;
    circumference=2*pi*radius;
    return circumference;
}
document.write("<br>The Circumference of the Circle is "+calcCircumference(5));

function calcArea(radius)
{
    var pi=3.142;
    var Area;
    Area=pi*radius*radius;
    return Area;
}
document.write("<br>The Area  of the Circle is "+calcArea(5));
