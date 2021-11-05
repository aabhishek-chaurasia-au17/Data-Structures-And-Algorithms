

const arr = [ 45, 20, 50, 25, 36] // 45, 20, 50, 25, 36

function sorting(arr) {

    for (let indexi = 0; indexi < arr.length; indexi++) {  //
        
        for (let indexj = 0; indexj < arr.length ; indexj++) {
            
            if(arr[indexj] > arr[indexj +1]){
                 
                swap(arr, indexj, indexj +1)
            }
            
        }
    }
    return arr
}


function swap(arr, indexi, indexj) {

    [arr[indexi] , arr[indexj]] = [arr[indexj], arr[indexi]]

    return arr
}

console.log(sorting(arr));
