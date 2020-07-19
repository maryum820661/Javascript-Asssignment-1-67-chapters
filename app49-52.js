//Assignment # 49 till 52

//1. Create a signup form and display form data in your web page on submission.

function infodisplay()
{

let name=document.getElementById("name");
let email=document.getElementById("email");
document.write("The name of the person who signed up is "+name.value+'\n');
document.write("The email of the student who signed up is"+email.value+'\n');
}

//2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. 

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var pro=document.getElementById("pro");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      pro.style.height="700";
      btnText.style.margin="25px 10px  0px  0px";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      btnText.style.margin="350px 10px  0px  0px";
      moreText.style.display = "inline";
   

    }
  }

///3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.


