/* Advance Javascript Learning process and practice,
* They are all writing into a button function
* Author: Patrick Fidel
* Date: 30/01/2023
* Github: https://www.github.com/patthrills
*/


//Javascript's Math constants
const num = [20, 33, 101, 235, 3, 581, 256, 342, 300, 301];

//Math.E
function method_1() {
	let check = Math.E;
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.E </b>// returns Euler's number`;
};

//Math.PI
function method_2() {
	let check = Math.PI;
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.PI </b> returns PI`;
};

//Math.SQRT2
function method_3() {
	let check = Math.SQRT2;
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.SQRT2 </b> returns square root of 2`;
};

//Math.SQRT1_2
function method_4() {
	let check = Math.SQRT1_2;
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.SQRT1_2 </b> returns square root of 1/2`;
};

//Math.LN2
function method_5() {
	let check = Math.LN2;
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.LN2 </b> returns natural logrithm of 2`;
};

//Math.LN10
function method_6() {
	let check = Math.LN10;
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.LN10 </b> returns natural logrithm of 10`;
};

//Math.LOG2E
function method_7() {
	let check = Math.LOG2E;
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.LOG2E </b>  returns base 2 logarithm of E`;
};

//Math.LOG10E
function method_8() {
	let check = Math.LOG10E;
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.LOG10E </b>  returns base 10 logarithm of E`;
};

//Math.round()
function method_9() {
	let result = num[6] / num[4];
	let check = Math.round(result);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.round(x) </b> Returns x rounded to its nearest integer`;
};

//Math.ceil()
function method_10() {
	let result = num[6] / num[4];
	let check = Math.ceil(result);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.ceil(x) </b> Returns x rounded up to its nearest integer`;
};

//Math.floor()
function method_11() {
	let result = num[6] / num[4];
	let check = Math.floor(result);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b> Math.floor(x) </b> Returns x rounded down to its nearest integer`;
};

//Math.trunc()
function method_12() {
	let result = num[6] / num[4];
	let check = Math.trunc(result);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.trunc(x)</b> Returns the integer part of x (new in ES6)`;
};

//Math.sign(x)
function method_13() {
	let result = num[6] / num[4];
	let check = Math.sign(result);

	if(result = 1 ) {
		check = "True";
	} else {
		check = "False";
	};
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.sign(x)</b> returns if x is negative, null or positive`;
};

//Math.pow()
function method_14() {
	let check = Math.pow(2, 2);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.pow(x, y)</b> returns the value of x to the power of y`;
};

//Math.sqrt()
function method_15() {
	let check = Math.sqrt(64);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.sqrt(64)</b> returns the square root of x`;
};

//Math.abs()
function method_16() {
	let check = Math.abs(-8.7);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.abs(-8.7)</b> returns the absolute (positive) value of x`;
};

//Math.sin()
function method_17() {
	let check = Math.sin(90);
	let check1 = Math.sin(90 * Math.PI / 180);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.sin(90)</b> returns the sine (a value between -1 and 1) of the angle 90 (given in radians) <br>
	If you want to use degrees instead of radians, you have to convert degrees to radians:
	<b>Angle in radians = Angle in degrees x PI / 180.</b> <br>
	<b>Math.sin(90 * Math.PI / 180)</b> <h3>${check1}</h3>`;
};

//Math.cos()
function method_18() {
	let check = Math.cos(90);
	let check1 = Math.cos(90 * Math.PI / 180);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.cos(90)</b> returns the cosine (a value between -1 and 1) of the angle 90 (given in radians) <br>
	If you want to use degrees instead of radians, you have to convert degrees to radians:
	<b>Angle in radians = Angle in degrees x PI / 180.</b> <br>
	<b>Math.cos(90 * Math.PI / 180)</b> <h3>${check1}</h3>`;
};

//Math.max
function method_19() {
	let check = Math.min(22, 40, 32,34,2,4);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.min(22, 40, 32,34,2,4)</b> returns minimum number in an array`;
};

//Math.max
function method_20() {
	let check = Math.max(22, 40, 32,34,2,4);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.max(22, 40, 32,34,2,4)</b> returns maximum number in an array`;
};

//Math.random(x)
function method_21() {
	let check = Math.random();
	let check1 = Math.floor(Math.random() * 1000);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.random(x)</b> returns a random number between 0 (inclusive), and 1 (exclusive)
	<b>Math.random</b> returns numbers less than 1. to increase its numbers you can do this <br>
	<b>Math.floor(Math.random() * 1000)</b> <h3>${check1}</h3> `;
};

//Math.log
function method_22() {
	let check = Math.log(num[4]);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.log(x)</b> returns the natural logarithm of x.`;
};

//Math.log2
function method_23() {
	let check = Math.log2(num[4]);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.log2(x)</b> returns the base 2 logarithm of x.`;
};

//Math.log10
function method_24() {
	let check = Math.log10(num[4]);
	document.getElementById('demo').innerHTML = `<h3>${check}</h3>
	<b>Math.log10(x)</b> returns the base 10 logarithm of x.`;
};

