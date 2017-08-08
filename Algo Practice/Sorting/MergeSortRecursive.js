// Merge Sort 
//Author: Nirupama Janapati

function mergeSort (arr) {
    
    console.log("Calling mergeSort function");

    var length = arr.length;
    console.log("length:" +length);
    
    var low = 0, high = length - 1;
    console.log("low :" +low);
    console.log("high :" +high);

    if (length < 2) {

        return;

    } 
            var mid = Math.floor (length / 2);
            console.log("mid :" +mid);

            var left = arr.slice(low, mid);
            console.log("left array :" +left);
            
            var right = arr.slice(mid, length);
            console.log("right array :" +right);

           console.log("Calling mergeSort left");
             mergeSort (left);
        
            console.log("Calling mergeSort right");
             mergeSort (right);
        
            console.log("Calling merge function");
            return merge (left, right);
}


function merge (left, right) {
    
    console.log ("-----------merge starts----------------")

    var result = [];
    
    var leftLength = left.length;
    console.log("left: " +left);
    console.log("left length: " +leftLength);
    
    var rightLength = right.length;
    console.log("right: " +right);
    console.log("right length: " +rightLength);

    var i = 0, j = 0, k = 0; 

    while ( i<leftLength && j<rightLength) {
        
        if ( left[i] < right[j]) {
            
            console.log("left < right");
            result.push(left[i]);
            
            i++;
            console.log("i: " +i);
            k++;
            console.log("k: " +k);

        } else {
            
            console.log("right < left");
            result.push(right[j]);
            j++;
            k++;
            console.log( "result: " +result);
        }
    }

    while (i < leftLength) {
            result.push(left[i]);
            i++;
            k++;
         console.log(result);
         console.log ("-----------merge ends----------------")
    }
    
    
     while (j < rightLength) {
            console.log("j < rightLength");
            console.log("j: " +j);
            result.push(right[j]);
            j++;
            k++;
         console.log(result);
         console.log ("-----------merge ends----------------")
    } 
    
    return result;

}

var arr = [3,9,1,10];
console.log(mergeSort(arr));