let mycar = { make: 'Honda', model: 'Accord', year: 1998 };

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

// var x, y;

// x = mycar.make; // x gets the value "Honda"

console.log(myFunc(mycar));
// y = mycar.make;

function square(number) {
  return number * number;
}
console.log(square(5));

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(200));
