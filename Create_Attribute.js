function newParagraph() {
    //This creates a heading
    var element = document.createElement("h2");
    
    var main = document.getElementById("main");
    
    main.appendChild(element);
    
    var textH = document.createTextNode("Wake up neo....the matrix has you");
    
    element.appendChild(textH);
    
    //creates a paragraph
    var element = document.createElement("p");
    
    main.appendChild(element);
    
    var text = document.createTextNode("The matrix was reloaded ..neo will return.");
    
    element.appendChild(text);
    
    var pAttribute = document.createAttribute("id");
    pAttribute.value = "test";
    element.setAttributeNode(pAttribute);
    
}

function removeHeader() {
    
    var elementH = document.getElementsByTagName("h2")[2];
    var parent =elementH.parentNode;
    parent.removeChild(elementH)
    
    var elementP = document.getElementsByTagName("p")[2];
    var parent =elementP.parentNode;
    parent.removeChild(elementP)
    
}