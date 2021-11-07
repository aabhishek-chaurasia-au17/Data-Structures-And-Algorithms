class User {
    constructor(name, lname){
        this.fname = name
        this.lname = lname
    }

}

const user1 = new User()
const user2 = new User()

user1.fname = 'abhishek'
user1.lname = 'chaurasia'

User.prototype.getSorting = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length -1; j++){
            if(arr[j] > arr[j+1]){
                this.swap(arr, j, j+1)
            }
        }
    }
    return arr
}

User.prototype.swap = function(arr, i, j){
    [arr[i] , arr[j]] = [arr[j] , arr[i]]
    return arr
}

const arr = [ 20, 46, 65, 48, 75]

console.log(user1.getSorting(arr));
console.log(user2.getSorting(arr));


