class Stack{
    constructor(){
        this.storage = []
        this.count = 0
    }

    push(value){
        this.storage[this.count] = value
        this.count++
        console.log(`${value} is ${this.count}`);
        return this.count
    }

    pop(){
        if(this.count > 0){
            let value = this.storage[this.count -1]
            delete this.storage[this.count]
            console.log(`${value} removed`);
            return value
        }
    }

    peek(){
        if(this.count > 0){
            console.log(`top element is ${this.storage[this.count -1]}`);
           return this.storage[this.count -1]
        }
    }

    isEmpty(){
        if(this.count === 0){
            console.log(`This Stack is empty`);
        }else{
            console.log(`Stack is not empty`);
        }
    }

    clear(){
        this.storage = []
        this.count = 0
        console.log(`stack clear`);
        return this.storage
    }
}

const stack = new Stack()

stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();
stack.peek()
stack.isEmpty()
stack.clear()


