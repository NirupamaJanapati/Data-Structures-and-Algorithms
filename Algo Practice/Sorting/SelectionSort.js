// Selection Sort 
//Author: Nirupama Janapati

function selectionSort (input, length) {

	for ( var i =0 ; i <= length -1 ; i++) {
		for (var j = i+1 ; j <= length -1 ; j++) {

			if ( input[i] > input[j]) {

				tmp = input[i];
				input[i] = input[j];
				input[j] = tmp;
			}
		}
	}
	return input;
}


var input = [9,5,3,0,1,8];
var length = input.length;
console.log (selectionSort (input, length));