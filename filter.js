// FILTER
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let vals = [5, 4, 9, 2, 1];

// function isEven(num) {
//   if ( num % 2 == 0){
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEven(x) {
//   return ( x % 2 == 0) 
// }

vals = vals.filter( x =>  x % 2 == 0 );
console.log(vals);
