// Bubble Sort 
//Author: Nirupama Janapati

function bubbleSort (input, length) {

	var tmp;
	var swapped = false;
	
	for ( var i = 0; i <= length - 1; i++) {
		for (var j = 0; j <= length - 2 ; j++) {

			if ( input[j] > input [j+1] ) {
				tmp = input[j];
				input[j] = input[j+1];
				input[j+1] = tmp;
				swapped = true;
			}
		}

		if (swapped === false) {
			break;
		}
	}
	return input;	
}

var input = [55,19,70,21,68,42,30];
var length = input.length;
console.log (bubbleSort(input, length));