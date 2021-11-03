
// Binery Search 
// its apply only sorted array

// steps
// find mid index : mid =(low+high) / 2
// if a[mid] == key, return mid
// if key > arr[mid] low = mid +1
// if key < arr[mid] high = mid -1


function getBinery(arr, x) {
    // Iterate while start not meets end
    while (start <= end) {

        // Find the mid index
        let mid = Math.floor((start+end) / 2)

        // If element is present at mid, return True
        if (arr[mid] === x) {
            return mid

        // Else look in left or right half accordingly
        }else if(arr[mid] < x ) {
            start = mid + 1
        
        }else{
            end = mid -1
        }
    }
    return null
}

const arr = [1, 2, 3, 5, 6, 7, 8]
const x = 8
let start = 0
let end = arr.length -1

console.log(getBinery(arr, x));
