function searchElement (arr, target, low, high) {
    
    var mid = (low + high) / 2 | 0;
    console.log ( " in search Element, low " + low);
    console.log ( " in search Element, high " + high);
    console.log ( " in search Element, mid " + mid);
    
    var index = 0;
    
    while (low <= high) {
        
        if ( arr[mid+1] < arr[mid] ) {
            
            var pivot = mid + 1;
            console.log ( " in search Element, pivot " + pivot);
            break;
            
            /*if ( arr[pivot] < target) {
                
                console.log ( " in search Element, calling Binary Search");
                index = BinarySearch (arr, target, mid+1, high);
                console.log ( " in search Element, index " + index);
            
                
            } else {
                
                console.log ( " in search Element, calling Binary Search");
                index = BinarySearch (arr, target, low, mid-1);
                console.log ( " in search Element, index " + index);
            }
        
        return index;*/
        
        } else if ( arr[low] <= arr[mid]) {
          
            console.log ( " in search Element, pivot in left half");
            low = mid + 1;
        
        } else {
            console.log ( " in search Element, pivot in right half");
            high = mid - 1;
        }
    
    }
}

function BinarySearch (arr, target, low, high) {
    
    var mid = (low + high) / 2 | 0;
    console.log ( " in Binary Search, mid " + mid);
    
    while (low <= high) {
        
        if ( arr[mid] === target) {
            
            console.log ( " element found");
            return mid;
            
        } else if ( arr[mid] < target) {
            
            low = mid + 1;
            
        } else if ( arr[mid] > target) {
            
            high = mid - 1;
            
        }
    }
    return -1;
}


var arr = [21, 23, 25, 11, 13, 15, 17, 19];
console.log (searchElement (arr, 15, 0, arr.length - 1));