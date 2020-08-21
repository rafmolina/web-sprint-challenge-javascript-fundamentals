// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//It is the parent child relationship, also functions inheritance. The nested function can always pull from up but never give back up.
//In this case Internal is a variable in nestedFunctions parent so it can inherit all its variables.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(item){
  function add() {
    var counter = 0;
    counter += 1;
    return counter;
  }
}
console.log(summation(4))