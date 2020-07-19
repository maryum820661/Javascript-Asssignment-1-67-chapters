//Assignment# 17,18,19,20
//Arrays and Loops

///1. Declare and initialize an empty multidimensional array. (Array of arrays)
var arr=[[],[],[]];
//2. Declare and initialize a multidimensional array representing the following matrix:2. Declare and initialize a multidimensional array representing the following matrix:
 
var multidimensional=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write("<h1>Multi dimensional Array</h1>")
for(i=0;i<multidimensional.length;i++)
{

    for(j=0;j<multidimensional[i].length;j++)
    {
        document.write(multidimensional[i][j]);
    }
    document.write("<br>")
}
//3. Write a program to print numeric counting from 1 to 10.

for(i=1;i<=10;i++)
{
    document.write(i+"<br>");
}
//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.


var userInput1=+prompt("Enter the number  to display its multiplication table");
var userInput2=+prompt("Enter the length of the table");
for(i=1;i<=userInput2;i++)
{
    document.write(userInput1+"x"+i+"="+userInput1*i+"<br>");
}

//5.Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

 var fruits = ['apple', "banana", "mango", "orange", "strawberry"];
 document.write("<h1>Fruits Name</h1>");
 for(i=0;i<fruits.length;i++)
 {
     document.write(fruits[i]+"<br>");
 }
 for(i=0;i<fruits.length;i++)
 {
     document.write("Element at index "+i+" is "+fruits[i]+"<br>");
 }

/*
6. Generate the following series in your browser. See example output. a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
*/

//a
document.write("<h2>Counting</h2><br>");
for(i=0;i<=15;i++)
{
    document.write(i+",");
}

//b

document.write("<h2>Reverse Counting</h2>");
for(i=10;i>0;i--)
{ 
    document.write(i+",");
}
//c

document.write("<h2>Even</h2>");
for(i=0;i<=20;i++)
{
    if(i%2==0)
    {
        document.write(i+",");

    }
}
//d
document.write("<h2>Odd Series</h2><br>");
for(i=0;i<=20;i++)
{
    if(i%2!=0)
    {
        document.write(i+",");

    }

}
//e

document.write("<h2>Series</h2>");
for(i=1;i<=20;i++)
{
    if(i%2==0)
    {
        document.write(i+"k,");

    }
}

//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

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

//8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

var  A = [24, 53, 108, 91, 12];
var largest=A[0];
for(i=0;i<A.length;i++)
{
    if(largest<A[i])
    {
        largest=A[i];
    }
}
document.write("Largest number in array"+largest+"<br>");

//9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

var A = [24, 9, 78, 91, 12];
var smallest=A[0];
for(i=0;i<A.length;i++)
{
    if(smallest>A[i])
    {
        smallest=A[i];
    }
}
document.write("Smalllest number in array is "+smallest+"<br>");
//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("<h2>Multiples of 5</h2>")
for(i=1;i<=100;i++)
{
    if(i%5==0)
    {
        document.write(i+",")
    }
}