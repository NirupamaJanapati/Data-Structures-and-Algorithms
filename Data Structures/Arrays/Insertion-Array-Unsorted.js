

//Insertion in Sorted Array

function insertElement (arr, key, capacity) {
    try {
      if (size < capacity) {
        arr.push (key);
        return arr;
    }
    }catch (error) {
        console.log(error.message);
    }
}

var arr = [20,10,40,70,90,44,90,74,10,22,70];
var size = arr.length;
var capacity = size / arr[0].length;
console.log(insertElement(arr, 77, 10));