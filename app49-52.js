//Assignment # 49 till 52

//1. Create a signup form and display form data in your web page on submission.

function infodisplay()
{
  var a= document.getElementById("f").childNodes;
  console.log(a);

  var val1=document.getElementById("name");
  var p1=document.createElement("p");
  var textnode1=document.createTextNode(val1.value);
  p1.appendChild(textnode1);
  var messages=document.getElementById("msg");
  messages.appendChild(p1);
  var val2=document.getElementById("email");
  var p2=document.createElement('p');
  var textnode2=document.createTextNode(val2.value);
  p2.appendChild(textnode2);
  messages.appendChild(p2);  
 
  var val3=document.getElementById("h");
  var textnode3=document.createTextNode('SIGN UP INFORMATION');
  val3.append(textnode3);
  val1.value="";
  val2.value="";
  var pass=document.getElementById("password");
  pass.value="";
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


