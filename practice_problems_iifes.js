// PROBLEM 1 && 2
// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();


// PROBLEM 3
// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);
// console.log(sum)


// PROBLEM 4
// (function countdown(num) {
//   while (num >= 0) {
//     console.log(num);
//     num -= 1;
//   }
// })(7);


// PROBLEM 5
// (function foo() {
//   console.log('Bar');
// })();

// foo()


// PROBLEM 6
let bar = (function(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2)

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);