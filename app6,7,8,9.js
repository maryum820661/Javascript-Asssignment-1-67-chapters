//Assignment#06,07,08,09
//Math Expression


//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var a=+prompt("Enter the number");

document.write("The value of a is "+a);
document.write("<br>");
document.write("The value of ++a is "+ ++a);
document.write("<br>");
document.write("The value of a++ is "+a++);
document.write("<br>");
document.write(" Now The value of a is"+a );
document.write("<br>");
document.write("The value of --a is"+--a);
document.write("<br>");
document.write("Now the value of a is "+a);
document.write("<br>");
document.write("The value of a-- is "+a--);
document.write("<br>");
document.write("Now the value of  a is"+a);


//2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

var a=2,b=1;
var result= --a- --b+ ++b+b--;
            //1    0    1   1

document.write("<br> value of a is"+a);
document.write("<br> value of b is "+b);
document.write("<br> value of result is "+result);

//3. Write a program that takes input a name from user & greet the user.
var userName=prompt("Enter your name!");
alert("Good Morning "+userName);


//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

table=+prompt("Enter the table you want to display ");
document.write("<br>");

if(table)
{
for(i=1;i<=10;i++)
{
    document.write(table+"x"+i+" = "+ table*i+"<br>");
}
}
else {
    
    for(i=1;i<=10;i++)
    {
    document.write("5"+"x"+i+"="+5*i+"<br>");
    }
}

/*6. Take
a) Take three subjects name from user and store them in 3 different variables.
b) Total marks for each subject is 100, store it in another variable.
c) Take obtained marks for first subject from user and stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user and store them in variables.
e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
*/




function myfunc()
{
var sub1=prompt('Enter the name of subject 1');
var sub2=prompt('Enter the name of subject 2');
var sub3=prompt('Enter the name of subject 3');
var total=300;
total2=100;
var marks1=+prompt('Enter the marks in subject1');
var marks2=+prompt('Enter the marks in subject2');
var marks3=+prompt('Enter the marks in subject3');
obtainedMarks=marks1+marks2+marks3;
percentage=(obtainedMarks/300)*100;
per1=(marks1/100)*100;
per2=(marks2/100)*100;
per3=(marks3/100)*100;
document.getElementById("sub1").innerHTML=sub1;
document.getElementById("sub2").innerHTML=sub2;
document.getElementById("sub3").innerHTML=sub3;
document.getElementById("per1").innerHTML=per1;
document.getElementById("per2").innerHTML=per2;
document.getElementById("per3").innerHTML=per3;
document.getElementById("total").innerHTML=total;
document.getElementById("marks1").innerHTML=per1;
document.getElementById("marks2").innerHTML=per2;
document.getElementById("marks3").innerHTML=per3;
document.getElementById("obtainedMarks").innerHTML=obtainedMarks;
document.getElementById("percentage").innerHTML=percentage;

}