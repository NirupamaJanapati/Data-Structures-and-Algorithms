//Deletion in UnSorted Array

function findPosition (arr, key) {
    for ( var i = 0; i < arr.length; i++) {
        if ( arr[i] === key) {
                return i;
            }
    }
        return -1;
}

function deleteElement (arr, key) {
    var position = findPosition (arr , key);
    if ( position === -1) {
             return "Element not found";
        }
    else {
            console.log("element found at position " +position);
            arr.splice(position, 1)
            return "Array after deletion" + arr;
    } 
}

var arr = [20,10,40,77,90,44,90,74];
console.log(deleteElement(arr, 74));