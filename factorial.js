function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n - 1);  //Here's the recursion
}


var n=prompt("Enter the value:");  // Enter any value

alert(factorial(n));

