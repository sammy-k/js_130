let p = console.log;

function missing(arr) {
  let missingNums = [];
  for (let num = arr[0]; num <= arr[arr.length - 1]; num += 1) {
    if (!arr.includes(num)) {
      missingNums.push(num);
    }
  }
  return missingNums;
}

p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6]));              // []