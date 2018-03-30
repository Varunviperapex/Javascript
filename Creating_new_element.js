function newParagraph() {
    
    var element = document.createElement("p");
    
    var main = document.getElementById("main");

    main.appendChild(element);
    
    var text = document.createTextNode("The matrix was reloaded ..neo will return.");
    
    element.appendChild(text);
}