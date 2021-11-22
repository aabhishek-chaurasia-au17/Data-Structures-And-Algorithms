// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.


var MinStack = function() {
    this.storage = []
    this.minValue = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.minValue[this.minValue.length - 1] >= val || this.minValue.length === 0) {
    this.minValue.push(val)
  }
  return this.storage.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
const deleteValue = this.storage.pop();
    if (deleteValue === this.getMin()){
        this.minValue.pop()
    }
  return deleteValue
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return this.storage[this.storage.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minValue[this.minValue.length -1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */