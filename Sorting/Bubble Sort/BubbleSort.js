
const arr = [85, 78, 69, 75, 26, 55, 46, 38]

function getBubbleSort(arr){
    for(let i = 0; i < arr.length; i++){ 
        for(let j = 0; j < arr.length-1; j++){ 
            if(arr[j] > arr[j+1]){ 
                swap(arr, i, j+1) 
            }
        }
    }
    return arr
}


function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

console.log(getBubbleSort(arr));
