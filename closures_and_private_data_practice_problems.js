// function makeCounter() {
//   var count = 0;       // declare a new variable
//   return function() {
//     count += 1;        // references count from the outer scope
//     console.log(count);
//   };
// }

// var counter = makeCounter();
// counter(); // 1
// counter(); // 2
// counter(); // 3

// PROBLEM 1
// function makeCountLogger(num) {
//   return function (num2) {
//     if (num <= num2) {
//       while (num <= num2) {
//         console.log(num)
//         num += 1;
//       }
//     } else {
//       while(num >= num2) {
//         console.log(num);
//         num -= 1;
//       }
//     }
//   }
// }

// let countlog = makeCountLogger(5)
// countlog(8)
// countlog(2)


// PROBLEM 2
// function makeList() {
//   let list = [];
//   return function (item) {
//     if (item) {
//       if (!list.includes(item)) {
//         list.push(item);
//         console.log(`${item} added!`)
//       }
//       else if (list.includes(item)) {
//         list.splice(list.indexOf(item), 1);
//         console.log(`${item} removed!`)
//       }
//     } else {
//       if (list.length > 0) {
//         list.forEach(item => console.log(item));
//       } else {
//         console.log('The list is empty.')
//       }
//     }
//   } 
// }

// let list = makeList();
// list();
// list('make breakfast');
// list('read book');
// list();
// list('make breakfast');
// list();


// MORE PROBLEMS 
// PROBLEM 1
function makeList() {
  let items = []
  return {
    list() {
      items.forEach(item => console.log(item))
    },

    add(item) {
      items.push(item);
      console.log(`${item} added!`);
    },

    remove(item) {
      if (items.includes(item)) {
        items.splice(items.indexOf(item), 1);
        console.log(`${item} removed!`);
      }
    }
  }
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas')
list.list()
console.log(list.items)