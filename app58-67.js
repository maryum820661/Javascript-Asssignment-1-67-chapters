
//1. Consider you have following code snippet: (Copy it in your HTML file) <div> <h1> DOM </h1> <div id=”form-content” class=”content”> <label for=”first-name”>First Name</label> <input type=”text” id=”first-name” /> <label for=”last-name”>Last Name</label> <input type=”text” id=”last-name” /> <label for=”email”>Email</label> <input type=”text” id=”email” /> </div> <div id=”main-content” class=”content”> <p class=”render”> First Name : Alex</p> <p class=”render” id=”lastName”>Last Name: Bank</p> <p class=”render”> Email : alexbank@example.com</p> <p class=”render”> Country : Pakistan </p> <p class=”render”> contact : +92 300 1234567</p> </div> </div> i. Get element of id “main-content” and assign them in a variable. ii. Display all child elements of “main-content” element. iii. Get all elements of class “render” and show their innerHTML in browser. iv. Fill input value whose element id first-name using javascript. v. Repeat part iv for id ”last-name” and “email
//2.Display all child elements of “main-content” element.
//3. Get all elements of class “render” and show their innerHTML in browser.
//4.Fill input value whose element id first-name using javascript. 
//5. Repeat part iv for id ”last-name” and “email”.
 
function question1()
{
var target1=document.getElementById("main-content");
var a=target1.childNodes;
console.log(a);
var target2=document.getElementsByClassName("render");
console.log(target2);
var inputfill1=document.getElementById("first-name");
inputfill1.setAttribute("value","Maryum");
var inputfill2=document.getElementById("last-name");
inputfill2.setAttribute("value","Sheikh");
var inputfill3=document.getElementById("email");
inputfill3.setAttribute("value","mariyumsheikh820661@gmail.com");
}



//2.use HTML code of question 1 and  show the result on browser. 
///i. What is node type of  element having id “form-content”. 
//ii. Show node type of element having id “lastName” and its child node. 
//iii. Update child node of element having id “lastName”.
//iv. Get First and last child of id “main-content”.
//v. Get next and previous siblings of id “lastName”.
//vi. Get parent node and node type of element having id “email”

function question2()
{ 
    var question2=document.getElementById("question2");
    var val1=document.getElementById("form-content");
    var p1=document.createElement("p");
    var textnode1=document.createTextNode(val1.nodeType);
    p1.appendChild(textnode1);
    question2.appendChild(p1);
    var val2=document.getElementById("last-name");
    var p2=document.createElement("p");
    var textnode2=document.createTextNode(val2.nodeType);
    p2.appendChild(textnode2);
    question2.appendChild(p2);
    var p3=document.createElement("p");
    var textnode3=document.createTextNode(val2.childNodes);
    p3.appendChild(textnode3);
    question2.appendChild(p3);
    var ln=document.getElementById("last-name");
    var c=ln.childNodes[0];
    console.log(c);//child nodes of last name donot exist so far.
    var mc=document.getElementById("main-content");
    var a=mc.childNodes[0];
    var b=mc.lastChild;
    var p4=document.createElement("p");
    var p5=document.createElement("p");
    var textnode4=document.createTextNode(a);
    var textnode5=document.createTextNode(b);
    p4.appendChild(textnode4);
    p5.appendChild(textnode5);
    question2.appendChild(p4);
    question2.appendChild(p5);
    var d=ln.previousElementSibling;
    p6=document.createElement("p");
    var textnode6=document.createTextNode(d);
    p6.appendChild(textnode6);
    question2.appendChild(p6);
    var e=ln.nextElementSibling;
    p7=document.createElement("p");
    var textnode7=document.createTextNode(e);
    p7.appendChild(textnode7);
    question2.appendChild(p7);
    var email=document.getElementById("email");
    var f=email.nodeType;
    p8=document.createElement("p");
    var textnode8=document.createTextNode(f);
    p8.appendChild(textnode8);
    question2.appendChild(p8);
    var g=email.parentNode;
    p9=document.createElement("p");
    var textnode9=document.createTextNode(g);
    p9.appendChild(textnode9);
    question2.appendChild(p9);
    
}
