
// Binary Search Iterative for sorted array


function binarySearchIterative (arr, target) {
    
    var low = 0, high = arr.length - 1;
    
    while( low <= high) {
        var mid = Math.floor((low + high) / 2);
        
        if ( arr[mid] === target) {
            return mid;
        }
        
        if ( arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

var arr = [1,4,5,7,9,10,20,38,46,59,66,77,80];