
const arr = [20, 35, 40, 52, 57, 65, 69, 75]

function seletionSort(arr) {
    for(let i = 0; i < arr.length -1; i++){
        let min = i;
        for(let j = i +1; j < arr.length -1; j++){
            if(arr[min] > arr[j]){
                min = j
            }
        }
        if(min !== i){
            swap(arr, min, i) 
        }
    }
    return arr
}

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
    return arr
}


console.log(seletionSort(arr));