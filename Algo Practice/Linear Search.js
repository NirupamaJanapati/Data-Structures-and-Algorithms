// Linear search for an element in array



function linearSearch (arr, target) {
    
    for ( var i=0; i<arr.length; i++) {
        if (arr[i] === target) {
             return i;
        }   
    }
    return -1;
}

var arr = [1,3,7,10,70,2,80,100,45];
console.log(linearSearch(arr, 70));