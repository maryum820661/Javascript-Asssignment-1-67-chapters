//1. Write a program that displays current date and time in your browser.
var date=new Date();
document.write(date);

//2. Write a program that alerts the current month in words.
var date=new Date();
var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month=date.getMonth();
var currentMonth=monthsName[month];
document.write("<br> The current Month is "+currentMonth);

//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date= new Date();
var d=date.getDay();
var currentDate=days[d];
var sliceDay=currentDate.slice(0,3);
document.write("<br>The current day is "+sliceDay);

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date= new Date();
var d=date.getDay();
var currentDate=days[d];
if(currentDate==='Saturday'||currentDate==='Sunday')
{
    alert("Its fun day");
}
//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”
var  date=new Date();
var currentDate=date.getDate();
if(currentDate<=16)
{
    alert("First fifteen days of the month");
}
else{
    alert("Last  days of the month");
}

//6.Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
 var date= new Date();
 document.write("The current date is "+date);
 var d=date.getTime();
 document.write("<br>"+d);
 var minutes=d/(1000*60);
 document.write("<br>The minutes elapsed from january 1970 are "+minutes);

 //7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var date=new Date();
var hour=date.getHours();
if(hour<12)
{
   alert("Its AM"); 
}
else if(hour>12&&hour<=23){
    alert("Its PM");

}
//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var d = new Date(2020, 11, 31, 0, 0, 0);
document.write("<br>The date of the Last day of the year 2020 is"+d);

//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?Note: 1st Ramadan was on June 18, 2015
var d=new Date(2015,5,18,0,0,0);
document.write("<br>The date is"+d);
var dayPassed=d.getTime();
document.write("<br>The Milli Second passed are"+dayPassed);
var value=1000*60*60*24;
var convertedDay=(dayPassed)/value;
document.write("<br>The days Passed since 2015 are "+convertedDay);


//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
var d=new Date(2015,5,18,0,0,0);
var newDate=new Date();
document.write("<br>The date is"+d);
var dayPassed=d.getTime();
var convertedSecond=(dayPassed)/(1000);
var newDatePassed=newDate.getTime();
var newConvertedSecond=(newDatePassed)/1000;
var difference=newConvertedSecond-convertedSecond;
document.write("<br>The secconds Passed since 2015 are "+difference);

//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var currentDate=new Date();
document.write("<br>"+currentDate);
var hours=currentDate.getHours()-1;
var minutes= currentDate.getMinutes();
var seconds=currentDate.getSeconds();
var updatedDate=new Date(2020,5,19,hours,minutes,seconds);
document.write("<br>One hour ago it was "+updatedDate);

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var currentDate=new Date();
document.write("<br>"+currentDate);
var year=currentDate.getFullYear()-100;
var date=currentDate.getDate();
var hours=currentDate.getHours();
var minutes= currentDate.getMinutes();
var seconds=currentDate.getSeconds();
var updatedDate=new Date(year,5,date,hours,minutes,seconds);
document.write("<br>100 Years ago it was "+updatedDate);

//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser

var userInput=+prompt("Enter Your Age");
var currentDate=new Date();
var years=currentDate.getFullYear();
var birthYear=years-userInput;
document.write("<br>Birth Year is "+birthYear);

/*14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
*/

document.write("<br><h1>K-Electric Bill</h1>");

var customerName="Maryum Sheikh";
var currentDate=new Date();
var month=currentDate.getMonth();
var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthName=monthsName[month];
var noOfUnits=410;
var charges=16;
var netCharges=noOfUnits*charges;
var latePaymentCharges=350;
var grossAmount=netCharges+latePaymentCharges;
document.write("<br><b>Customer Name :<b> "+customerName);
document.write("<br><b>Month Name :<b> "+monthName);
document.write("<br><b>Charges Per Unit<b> "+charges);
document.write("<br><b>Net Amount Payable with in Due Date :<b> "+netCharges);
document.write("<br><b>Late Payment Charges :<b>"+latePaymentCharges);
document.write("<br><b>Gross Amount Payable After Due Date :<b> "+grossAmount);


