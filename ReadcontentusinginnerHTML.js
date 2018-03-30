function changeStyle(){
    
var confirmation = confirm("These changes are final");
    
if(confirmation==true){    
    
var paragraph = document.getElementsByClassName("para");

var firsParaText = paragraph[0].innerHTML;
var secondParaText = paragraph[1].innerHTML;
var addThem = paragraph[2].innerHTML=firsParaText + secondParaText;
 
var firsParaText = paragraph[0].innerHTML=" ";
var firsParaText = paragraph[1].innerHTML=" ";
    
document.getElementById("test").style.visibility="hidden";
    }
}