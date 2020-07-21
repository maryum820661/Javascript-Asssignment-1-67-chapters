/*Add modal.html style and html codes in your file 
Create an array of all images paths. 
Loop through array and display all images in browser using innerHTML. 
Add onclick function on each image. 
On image Function definition get modal using id and assign it to a variable, 
And on that variable 
Add class 'modal-open' 
Remove class 'modal-close' 
Add style to display block 
Assign image path to src 
On Modal Close Function definition "onClosedImagModal()" get modal using id and assign it to a variable, 
And on that variable 
Add class 'modal-close' 
Remove class 'modal-open' 
Set this line in end of function 
setTimeout(()=>{ modal.style.display = "none"; }, 550
*/
var images = ['images1/others/1.JPG','images1/others/2.JPG','images1/others/3.JPG','images1/others/5.JPG'];


function buildImage() {
 
    var container = document.getElementById('contents');
    var button=document.getElementById('but1');
    for (var i = 0; i < images.length; i++) {
    // create the image element
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', images[i]);
    imageElement.style.height="300px";
    imageElement.style.width="300px";
    var modalImg=document.getElementById("img1");
    var modal=document.getElementById("modal");
    imageElement.onclick=function()
    {
        modal.style.display = "block";
        button.style.display="block";
        modalImg.src = this.src;
    }
    // append the element to the container
    container.appendChild(imageElement);
}
button.onclick=function()
{
    modal.style.display="none";
    this.style.display="none";
}
}

//Question no 2:
function zoomin(){
var paragraph=document.getElementById("para1");
paragraph.classList.add("zoomin");
paragraph.classList.remove("zoomout");
}
function zoomout()
{
    var paragraph=document.getElementById("para1");
    
    paragraph.classList.add("zoomout");
    paragraph.classList.remove("zoomin");
    

}