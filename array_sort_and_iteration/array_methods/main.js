/* Advance Javascript Learning process and practice,
* They are all writing into a button function
* Author: Patrick Fidel
* Date: 30/01/2023
* Github: https://www.github.com/patthrills
*/


//Javascript's array methods
const arr = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "violet"];
const arrnum = [ 12, 2, 1, 8, 102, 501, 800, 20, ];

// .sort() Method
function method_1(){
	let check = arr.sort();
	let checknum = arrnum.sort()
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> <h3>${checknum}</h3> 
	<strong>"array.sort()"</strong> arranges element in alphabetical order but to work with numbers
	you need to add a function to the sort "function(a,b){return a -b }"`;
};

// .sort() method using numbers
function method_2(){
	let check = arrnum.sort(function(a,b){return a -b });
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>${check}</h3> 
	<strong>"array.sort(function(a,b){return a -b })"</strong> arranges element in numerical order.`;

};

// .sort() method - random sorts
function method_3(){
	let check = arrnum.sort(function(){return 0.5 - Math.random()});
	document.getElementById('demo').innerHTML = `<h3>${arrnum}</h3> <h3>${check}</h3> 
	<strong>"array.sort(function(){return 0.5 - Math.random})"</strong> makes the number random.`;

};

//.push() method fisher yates random method
function method_4(){
	for(let x = arrnum.length - 1; x > 0; x--){
					let y =Math.floor(Math.random() * (x+1));
					let z = arrnum[x];
					arrnum[x] = arrnum[y];
					arrnum[y] = z;
		};
	document.getElementById('demo').innerHTML = `<h3>${arrnum}</h3>
	<strong>"FisherYates method"</strong> makes the number random.`;
};

//.Math.max.appy method: to find the higest number in an array
function method_5(){
	let check = Math.max.apply(null, arrnum);
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>The highest value is:${check}</h3> 
	<strong>"Math.max.apply(null, arrnum)"</strong> Shows highest value`
};

//.Math.min.appy method: to find the higest number in an array
function method_6(){
	let check = Math.min.apply(null, arrnum);
	document.getElementById('demo').innerHTML = `<h3>${arr}</h3> <h3>The lowest value is:${check}</h3> 
	<strong>"Math.min.apply(null, arrnum)"</strong> Shows lowest value`
};

/*
* Array iteration 
* using initial arrays declared (arr[] & arrnum[])
*/

//forEach()
function method_7() {
	let text = "";
	arr.forEach(myFunction);

	function myFunction(value, item, index){
		text += value + "<br>";
	};

	document.getElementById("demo").innerHTML = `<strong>${text}</strong> <br>
	displays each element of an array in blocks `;
};


//.map() function
function method_8() {
	let check = arrnum.map(myFunction);

	function myFunction(value){
		return value * 2;
	};

	document.getElementById("demo").innerHTML = `<strong>${check}</strong> <br>
	creates a new array by performing a function on each array element`;
};

//.filter() function
function method_9() {
	let check = arrnum.filter(myFunction);

	function myFunction(value){
		return value > 12;
	};

	document.getElementById("demo").innerHTML = `<strong>${check}</strong> <br>
	creates a new array with array elements that pass a test`;
};

//.reduce() function
function method_10() {
	let check = arrnum.reduce(myFunction);

	function myFunction( total, value){
		return total + value;
	};

	document.getElementById("demo").innerHTML = `<strong>${check}</strong> <br>
	sum up all elements to make a whole`;
};


//.every() function
function method_11() {
	let check = arrnum.every(myFunction);

	function myFunction(value){
		return value < 12;
	};

	document.getElementById("demo").innerHTML = `<strong>is each array value less than 12? ${check}</strong> <br>
	checks if all array elements that pass a test`;
};

//.some() function
function method_12() {
	let check = arrnum.some(myFunction);

	function myFunction(value){
		return value > 100;
	};

	document.getElementById("demo").innerHTML = `<strong>are some array values greater that 100?${check}</strong> <br>
	checks if all array elements that pass a test`;
};


//keys() function
function method_13() {
	let check = arr.keys();
	let text = ""
	for(let x of check){
		text += x + "<br>"
	};

	document.getElementById("demo").innerHTML = `${text}</strong> <br>
	method returns keys of an array.`;
};


//entries() function
function method_14() {
	let check = arr.entries();
	let text = ""
	for(let x of check){
		text += x + "<br>"
	};

	document.getElementById("demo").innerHTML = `${text}</strong> <br>
	method returns an Array Iterator object with the keys of an array.`;
};

