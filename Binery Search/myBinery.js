
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const x = 30
let low = 0
let high = arr.length -1

function getBinery(arr, x, low, high) {
    while (low < high) {
        let mid = Math.floor((low+high) / 2);
        if (arr[mid] === x) {
            return mid
        } else if(arr[mid] < 0){
            low = mid -1
        }else{
            high = mid +1
        }
    }
    return null
}
console.log(getBinery(arr, x, low, high));
