function changeStyle() {
    
var paragraph = document.getElementsByTagName("p");

for (var i = 0;i<paragraph.length;i++)
    {
        var changeParaText= paragraph[i].style.fontStyle ="italic";
    }
    
    
//var changeParaText= paragraph[1].style.fontStyle ="italic";
    
//var changeParaText = paragraph[1].style.fontStyle = "italic";
    
//var changeParaText = paragraph[2].style.fontStyle = "italic";
    
//var changeParaText = paragraph[3].style.fontStyle ="italic";
} 