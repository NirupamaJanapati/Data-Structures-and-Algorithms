//Search Element in UnSorted Array

function findElement (arr, key) {
    for ( var i = 0; i < arr.length; i++) {
        if ( arr[i] === key) {
                return "Element found at position " + i;
            }
    }
        return "Element not found";
}


var arr = [20,10,40,77,90,44,90,74];
console.log(findElement(arr, 74));