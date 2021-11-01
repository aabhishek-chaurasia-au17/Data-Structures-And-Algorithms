class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    //add Value to top of stack
    push(value){
        this.items[this.count] = value;
        this.count++;
        console.log(`${value} added to ${this.count}`);
        return this.count -1;
    }

    // Returns and removes top element in stack
    // Return undefined if stack is empty 

    pop(){
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    //check top element in stack
    peek(){
        console.log(`Top element is ${this.items[this.count-1]}`);
        return this.items[this.count -1]
    }

    //check if stack is empty
    isEmpty(){
        console.log(this.count == 0 ? 'stack is empty' : 'stack is not empty');
        return this.count == 0;
    }

    //check size of stack
    size(){
        console.log(`${this.count} element in stack`);
        return this.count
    }

    // print value in stack
    print(){
        let str = ''
        for(let i = 0; i < this.count; i++){
            str += this.items[i] + ' '
        }
        return str;
    }

    // Clear stack
    clear(){
        this.items = [];
        this.count = 0;
        console.log('stack clear');
        return this.items
    }

}

const stack = new Stack()


stack.push(100)
stack.push(200)
stack.push(300)
stack.peek()

// stack.clear()

stack.pop()
stack.pop()
console.log(stack.print());


stack.isEmpty()
stack.size()

stack.clear()
// LIFO