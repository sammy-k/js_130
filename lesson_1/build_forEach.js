function forEach(array, callback, context) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(context, array[index], index, array);
  }
}

let arr = [1, 2, 3, 4];

// Array.prototype.forEach
// arr.forEach(value => console.log(value * value), arr);

// Our forEach function
forEach(arr, value => console.log(value * value), arr);

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
