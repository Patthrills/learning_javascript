/* Advance Javascript Learning process and practice,
* They are all writing into a button function
* Author: Patrick Fidel
* Date: 30/01/2023
* Github: https://www.github.com/patthrills
*/


//Javascript's Date methods
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decmber"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// .getFullYear Method
function method_1(){
	let date = new Date();
	let check = date.getFullYear();
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getFullYear()"</strong> method returns the year 
	of a date as a four digit number`;
};

//.getMonth method
function method_2(){
	let date = new Date();
	let month = date.getMonth();
	let check = months[month];
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getMonth()"</strong> method returns the month of a date as a number (0-11)`;
};

//.getDay method
function method_3(){
	let date = new Date();
	let day = date.getDay();
	 let check = days[day];
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getDay()"</strong> method returns the weekday of a date as a number (0-6)`;
};

//.getHours method
function method_4(){
	let date = new Date();
	let check = date.getHours();
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getHours()"</strong>method returns the hours of a date as a number (0-23)`;
};

//.getMinutes method
function method_5(){
	let date = new Date();
	let check = date.getMinutes();
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getMinutes()"</strong> method returns the minutes of a date as a number (0-23)`;
};

//.getSeconds method
function method_6(){
	let date = new Date();
	let check = date.getSeconds();
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getSeconds()"</strong>method returns the seconds of a date as a number (0-23)`;
};

//. getMilliseconds
function method_7(){
	let date = new Date();
	let check = date.getMilliseconds();
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getMilliseconds()"</strong>method returns the milliseconds of a date as a number (0-23)`;
};

//.getDate method
function method_8(){
	let date = new Date();
	let check = date.getDate();
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getDate()"</strong>method returns the day of a date as a number (1-3)`;
};

//.getTime Method
function method_9(){
	let date = new Date();
	let check = date.getTime();
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getTime()"</strong> method returns the number of milliseconds since January 1, 1970`;
};

//.getTimezoneOffset method
function method_10(){
	let date = new Date();
	let check = date.getTimezoneOffset();
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getTimezoneOffset()"</strong> method returns the difference 
	(in minutes) between local time an UTC time`;
};

// .setFullYear Method
function method_11(){
	const check = new Date();
	check.setFullYear(2020);
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.setFullYear(2020)"</strong> Set the year (optionally month and day)`;
};

//.setMonth method
function method_12(){
	const check = new Date();
	check.setMonth(2);
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.getMonth(2)"</strong> Set the month (0-11)`;
};

//.setDate method
function method_13(){
	let check = new Date();
	check.setDate(25);
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.setDay(25)"</strong> Set the day as a number (1-31)`;
};

//.setTime Method
function method_14(){
	let check = new Date();
	check.setTime(25121);
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.setTime(25121)"</strong> set the milliseconds from 1 januart 1970 `;
};

//.setHours method
function method_15(){
	let check = new Date();
	check.getHours(4);
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.setHours(4)"</strong> Set the hour (0-23)`;
};

//.setMinutes method
function method_16(){
	let check = new Date();
	check.setMinutes(30);
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.setMinutes(30)"</strong> Set the minutes (0-59)`;
};

//.setSeconds method
function method_17(){
	let check = new Date();
	check.setSeconds(20);
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.setSeconds(20)"</strong> Set the seconds (0-59)`;
};

//. setMilliseconds
function method_18(){
	let check = new Date();
	check.setMilliseconds(400);
	document.getElementById('demo').innerHTML = `<h3>${check}.</h3> 
	<strong>"date.setMilliseconds(400)"</strong> Set the milliseconds (0-999)`;
};