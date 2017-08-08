
// Binary Search Recursive - for sorted array

// Binary Search Recursive for sorted array

function binarySearchRecursive (arr, low, high, target) {
    
    if ( low <= high) {
        var mid = Math.floor((low + high) / 2);
        
        if ( arr[mid] === target) {
            return mid;
        } else if ( arr[mid] < target) {
            return binarySearchRecursive (arr, mid+1, high, target);
        } else if ( arr[mid] > target) {
            return binarySearchRecursive (arr, low, mid-1, target);
        }
    } else {
        return -1;
    }   
}

var arr = [1,4,5,7,9,10,20,38,46,59,66,77,80];
var low = 0, high = arr.length -1;
console.log (binarySearchRecursive (arr, low, high, 5));