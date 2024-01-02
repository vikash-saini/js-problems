/* Stack implementation - stack works on LIFO(Last In First Out) mechanism ex. vertical kept plates in kitchen
1. New element add at last
2. Last element remove fist
3. peek element- element at the top
4. size - total elements
*/

class Stack {
  constructor() {
    this.stack = [];
  }

  // New element add at last
  push(ele) {
    this.stack.push(ele);
  }

  // Last element remove fist
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty can't perform pop";
    }
    return this.stack.pop();
  }

  // peek element- element at the top
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.size() - 1];
  }

  // size - total elements
  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length == 0 ? true : false;
  }
  printStack() {
    return this.stack.toString();
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(9);
console.log("stack: ", stack);
console.log("poped ele: ", stack.pop());
console.log("after poped: ", stack);
console.log("size: ", stack.size());
console.log("peek: ", stack.peek());
console.log("isEmpty: ", stack.isEmpty());
console.log("print: ", stack.printStack());
