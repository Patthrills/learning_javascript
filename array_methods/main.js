/* Advance Javascript Learning process and practice,
* They are all writing into a button function
* Author: Patrick Fidel
* Date: 30/01/2023
* Github: https://www.github.com/patthrills
*/


//Javascript's array methods
const arr = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "violet"]

// .toString Method
function method_1(){
	let check = arr.toString();
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.toString()"</strong> changes an array to a string
	separated by commas`;
};

// .join() method
function method_2(){
	let check = arr.join("-");
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.join()"</strong> the same as toString() but can
	specify the symbols to seperate them.`;

};

//.pop() method
function method_3(){
	let check = arr.pop();
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.pop()"</strong> pop out the last element on the array`
};

//.push() method
function method_4(){
	let check = arr.push("Pink");
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.push()"</strong> adds new element to an array`
};

//.shift() method
function method_5(){
	let check = arr.shift();
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.shift()"</strong> removes element from the start`
};

//.shift() method
function method_6(){
	let check = arr.unshift("Black");
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.unshift("string")"</strong> adds new to an array from start<br>
	just like the .push() method`
};

//.length method
function method_7(){
	let check = arr.length;
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.length"</strong> Prints out length of an array`
};

//.concat() method
function method_8(){
	let newarr = ["black", "Grey", "Tomato"];
	let check = arr.concat(newarr);
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.concat(newarray)"</strong> concatenate 2 array elements`
};

//.splice() method
function method_9(){
	let check = arr.splice(1,3, "new","another");
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.splice(1,3, "new","another")"</strong> can be used to remove and replace element`
};


/*splice() method
* accepts 2 parameters:
* the first one tells were to start
* and the second one tells the number of elements to creat from the array
*/
function method_10(){
	let check = arr.splice(1,3);
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.csplice(1,3))"</strong> creates a new array from the array`
};