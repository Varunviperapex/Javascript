function car(type,color,miles) {
    this.type = type;
    this.color = color;
    this.miles = miles; 
}


var car1 =new car("Compact","blue", 6580);
var car2 =new car("Truck","red", 9880);
var car3 =new car("SUV","green", 6580);


function changeStyle(){
 document.getElementById("para")   .innerHTML =car1.type + " car with "+car1.miles+" miles "+car1.color+"  is the color.";
}