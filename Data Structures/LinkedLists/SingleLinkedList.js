// Single LinkedList
// Author: Nirupama Janapati

function LinkedList(val) {
	this.head = null;
}

LinkedList.prototype.push = function(val) {

	var node = {
		data : val,
		next : null
	}

	if(!this.head) {

		this.head = node;

	}else {
		current = this.head;
		while (current.next) {
			current = current.next;
		}

	current.next = node;

	}
}


LinkedList.prototype.remove = function(val) {

	var current = this.head;

	//case: if first node is the element to be removed
	if(current.data === val) {

		this.head = current.next;

	} else {
		var previous = current;

		// case: if the element is somewhere between first and last nodes	
		while(current.next) {
			if(current.data === val) {
				previous.next = current.next;
				break;
			}

			previous = current;
			current = current.next;
		}

		//case: if last node is the element to be removed
		if (current.next === val) {
			previous.next = null;
		}
	}
}


var mylist = new LinkedList;

mylist.push(12);
mylist.push(24);
mylist.push(36);
mylist.push(50);
mylist.push(75);

console.log("Printing list: \n" + mylist);
console.log("Printing head: \n" + mylist.head.data);
console.log(mylist.head.next);


mylist.remove(12);
console.log("Removed element");
console.log("Printing list: \n" + mylist);
console.log("Printing head: \n" + mylist.head.data);
console.log(mylist.head.next);


