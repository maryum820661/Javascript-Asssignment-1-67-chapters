
//Assignment#14,15,16

//Arrays
//1.Declare an empty array using JS literal notation to store student names in future.
var studentNames=[];
//2.Declare an empty array using JS object notation to store student names in future.
var studentNames=[];

//3.Declare and initialize a strings array.
var fruitsName=['Apple','Mango','Cherry','Banana','Pomegranate'];

//4.Declare and initialize a numbers array.
var numbersArray=[1,2,4,7,9];
//5.Declare and initialize a boolean array.
var booleanArray=[false,true,true,false];
//6. Declare and initialize a mixed array.

var mixedArray=[false,1,'maryum',100,true];
//7.Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

var qualification=['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

document.write("<h1>Qualification</h1>");
for(i=0;i<qualification.length;i++)
{
 document.write(qualification[i]+"<br>");
}

//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

var studentsNames=['Adnan','Usman','Zeeshan'];
var score=[280,400,350];
var percentage=[];
var total=500;
for(i=0;i<score.length;i++)
{
    
    percent=(score[i]/total)*100;
    percentage.push(percent);
    
}
for(i=0;i<percentage.length;i++)
{
    document.write("The Score of "+studentsNames[i]+" is "+score[i]+" Percentage: "+percentage[i]+"<br>");
}
//9. Initialize an array with color names. Display the array elements in your browser. a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. c. Add two more color to the beginning of the array. Display the updated array in your browser. d. Delete the first color in the array. Display the updated array in your browser. e. Delete the last color in the array. Display the updated array in your browser. f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
//remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

//a
var colors=['red','blue','green','orange','purple'];
document.write("<h1>Color Names</h1>")
for(i=0;i<colors.length;i++)
{
    document.write(colors[i]+"<br>");
}

var userInput=prompt("Enter the Color Name you want to push into the start of the array");
colors.unshift(userInput);

document.write("<h1>Color Names</h1>")
for(i=0;i<colors.length;i++)
{
    document.write(colors[i]+"<br>");
}
//b
var userInput1=prompt("Enter the color you want to push into the last of the array");
colors.push(userInput1);
document.write("<h1>Color Names</h1>")
for(i=0;i<colors.length;i++)
{
    document.write(colors[i]+"<br>");
}
//c
colors.push('pink','violet','black','white');
document.write("<h1>Color Names</h1>")
for(i=0;i<colors.length;i++)
{
    document.write(colors[i]+"<br>");
}
//d
colors.shift();
document.write("<h1>Color Names</h1>")
for(i=0;i<colors.length;i++)
{
    document.write(colors[i]+"<br>");
}
//e
colors.pop();
document.write("<h1>Color Names</h1>")
for(i=0;i<colors.length;i++)
{
    document.write(colors[i]+"<br>");
}

//f
var userInput2=prompt("Enter the color you want to insert");
var userInput3=prompt("Enter at which index you want to add this color");
colors.splice(userInput3,0,userInput2);
document.write("<h1>Color Names</h1>")
for(i=0;i<colors.length;i++)
{
    document.write(colors[i]+"<br>");
}
//g
var userInput3=prompt("Enter at which index you want to delete this color");
var userInput4=prompt("Enter how many elements you want to get deleted");
colors.splice(userInput3,userInput4);
document.write("<h1>Color Names</h1>")
for(i=0;i<colors.length;i++)
{
    document.write(colors[i]+"<br>");
}

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var studentsScore=[320,120,500,130];
document.write("Score of Students");
for(i=0;i<studentsScore.length;i++)
{
document.write(studentsScore[i]+"<br>");
}
document.write("<h1>Ordered Score of Students</h1>");
studentsScore.sort();
for(i=0;i<studentsScore.length;i++)
{
document.write(studentsScore[i]+"<br>");
}
//Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var citiesName=['karachi','Hyderabad','Rawalpindi','Peshawar'];
document.write("<h1>Cities Name</h1>")
for(i=0;i<citiesName.length;i++)
{
document.write(citiesName[i]+"<br>");
}
 document.write("<h1>Selected Cities Name</h1>")

var selectedCities=[];
selectedCities=citiesName.slice(0,2);
for(i=0;i<selectedCities.length;i++)
{
    document.write(selectedCities[i]+"<br>")
}
//12.Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ['This','is','my','cat'];
var new_word=arr.join(' ');
document.write("String: "+arr+"<br>");
document.write("New  joined String"+new_word);

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

document.write("<br><h1>FIFO Approach</h1>");
var devices=['Monitor','CPU','Printer','Mouse'];
document.write("<br>Out :"+devices[0]+"<br>");
devices.shift();
document.write("Out:"+devices[0]+"<br>");
devices.shift();
document.write("Out:"+devices[0]+"<br>");
devices.shift();
document.write("Out:"+devices[0]+"<br>");

//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
document.write("<br> <h1>LIFO Approach</h1>");
var devices=['Monitor','CPU','Printer','Mouse'];
document.write("<br>Out :"+devices[devices.length-1]+"<br>");
devices.pop();
document.write("Out:"+devices[devices.length-1]+"<br>");
devices.pop();
document.write("Out:"+devices[devices.length-1]+"<br>");
devices.pop();
document.write("Out:"+devices[devices.length-1]+"<br>");

//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
document.write("<h1>Drop down Menu using document.write</h1>")
var phone_manufacturers=['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

document.write("<select><option>"+phone_manufacturers[0]+"</option><option>"+phone_manufacturers[1]+"</option><option>"+phone_manufacturers[2]+"</option><option>"+phone_manufacturers[3]+"</option><option>"+phone_manufacturers[4]+"</option><option>"+phone_manufacturers[5]+"</option></select>")
