

function search(arr, val) { // 3, 6, 4, 5 match, 1, 2
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i
        }
    }
    return -1
}



// console.log(search(arr, 15));
const arr = [ 3, 6, 4, 5, 1, 2,]

function getSearch(arr, inp) {
    for (const idx in arr) {
        if (arr[idx] == inp) {
            return idx
        }
    }
    return null
}

console.log(getSearch(arr, 2));


function linerSeach(arr, inp) {
    for (const val of arr) {
        if(arr[val] === inp){
            return val
        }
    }
    return null
}

// console.log(linerSeach(arr, 5));
