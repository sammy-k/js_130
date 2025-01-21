// 1
// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     qux: qux,
//     baz: baz
//   }
// }

// console.log(foo(1, 2, 3))

// 2
// function foo() {
//   return {
//     bar: function() {
//       console.log('bar')
//     },
    
//     qux: function(arg1) {
//       console.log('qux');
//       console.log(arg1);
//     },
    
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   }
// }

// console.log(foo())

// 3
// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let newObj = foo(1, 2, 3)
// let bar = newObj.bar;
// console.log(bar)


// 4
// function foo(arr) {
//   return [
//     arr[2],
//     5,
//     arr[0],
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// console.log(result)
// let bar = result[0];
// let qux = result[1];
// let baz = result[2]
// console.log(bar, qux, baz)


// 5
// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);
// console.log(result)


// 6
// function product() {
//   let args = Array.from(arguments)
//   return args.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);
// console.log(result)


// 7
// const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }


// 8
// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// const first = obj.first;
// const second = obj.second;
// const rest = {
//   third: obj.third,
//   rest: obj.rest,
// }


// 9
// const [one, two, three] = [1, 2, 3];
// console.log(one)
// console.log(two)
// console.log(three)

// const {a, b, c} = { a: 'a', b: 'b', c: 'c' };
// console.log(a)
// console.log(b)
// console.log(c)


// 10
// const arr = [1, 2, 3];
// let [first, ...rest] = arr;
// console.log(first, rest)


// 11
// const arr = [1, 2, 3];
// const [, second, ] = arr;
// console.log(second)


// 12
// const obj = { a: 'a', b: 'b', c: 'c' };
// const { c: tail, ...obj2 } = obj;
// console.log(tail, obj2); // c { a: 'a', b: 'b' }


// 13
// function sum(...args) {
//   return args.reduce((accum, num) => accum + num);
// }

// console.log(sum(1, 2, 3, 4))


// 14
// function sum(...args) {
//   return args.reduce((accum, num) => accum + num);
// }

// console.log(sum(1, 2, 3, 4))
// console.log(sum(...[1, 2, 3, 4]))


// 15
// const arr = [1, 2, 3];

// function prod(num1, num2) {
//   return num1 * num2;
// }

// console.log(prod(...arr))


// 16
// let obj = {
//   foo: 'foo',
//   qux: 'qux',
//   bar: 'bar',
// };

// let obj2 = {...obj};
// console.log(obj2)
// let { ...obj3 } = obj;
// console.log(obj3)


// 17
function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  // missing code
}

let { type, age, colors } = qux();
console.log(type);    // cat
console.log(age);     // 9
console.log(colors);  // [ 'black', 'white' ]