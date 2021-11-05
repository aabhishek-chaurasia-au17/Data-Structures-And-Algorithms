
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const x = 50

function getBinery(arr, x) {
    let low = 0
    let high = arr.length -1

    while (low <= high) {
        let mid = Math.floor((low+high) / 2);
        if (arr[mid] === x) {
            return mid
        } else if(arr[mid] < x){
            low = mid +1
        }else{
            high = mid -1
        }
    }
    return null
}
console.log(getBinery(arr, x));
