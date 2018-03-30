function validateTextbox() {
 
    var box = document.getElementById("name");
    var box2 = document.getElementById("address");
    if (box.value.length<5 || box2.value.length<5)
        {
            alert("Please enter at least five characters");
            return false;
        }
     
}