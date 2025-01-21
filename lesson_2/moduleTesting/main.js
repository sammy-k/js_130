function foo(initialValue) {
  let total = initialValue; // 10
  return function (adjustmentValue) {
    total += adjustmentValue;
    return total;
  };
}

let bar = foo(10);
let result = bar(-2);
console.log(result)
// result += bar(5);
// result += bar(3);
// result += bar(-4);
// console.log(result);