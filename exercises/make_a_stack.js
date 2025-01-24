function newStack() {
  let stack = [];
  return {
    push(val) {
      stack.push(val);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(elem => console.log(elem));
    },
  }
}

let myStack = newStack();
myStack.push(1);
myStack.push(2);
myStack.push('hello');
myStack.push(3)
console.log('popped elem: ', myStack.pop());

myStack.printStack();