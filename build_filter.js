function filter(arr, callback) {
  let filtered = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (callback(arr[idx])) {
      filtered.push(arr[idx]);
    }
  }

  return filtered;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]