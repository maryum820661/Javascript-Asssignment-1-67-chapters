//Assignment # 43 till 48

//1. Show an alert box on click on a link. 

function showalert()
{


   alert("Hi you have clicked Me"); 
}
//2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
function imagealert()
{
    alert("Thanks for purchasing a phone from us");
}

//3.Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.  
function SomeDeleteRowFunction() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

//4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout
function changeimage()
{
var b = document.getElementById("img1"); 
b.setAttribute("src","images/UDP3.PNG");
}
function firstimage()
{
var b = document.getElementById("img1"); 
b.setAttribute("src","images/UDP5.PNG");
}
//5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser. 

let counter=0;
function increasecount()
{
++counter;
list1=document.getElementById('count').innerHTML=counter;
return list1;
}

function decreasecount()
{

--counter;
list2=document.getElementById('count').innerHTML=counter;
return list2;
}