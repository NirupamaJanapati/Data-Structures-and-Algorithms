// Insertion Sort 
//Author: Nirupama Janapati


function insertionSort (input, length) {

	for ( i = 1; i <= length - 1; i++) {

		var key = input[i];
		hole = i;

		while ( hole > 0 && input[hole - 1] > input[hole]) {

			input[hole] = input[hole - 1];
			hole = hole - 1;
			input[hole] = key;
		}
	}
	return input;
}


var input = [9,5,4,0,1,6,16,10];
var length = input.length;
console.log (insertionSort(input, length));