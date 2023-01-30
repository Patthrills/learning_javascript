/* Advance Javascript Learning process and practice,
* They are all writing into a button function
* Author: Patrick Fidel
* Date: 30/01/2023
* Github: https://www.github.com/patthrills
*/


//Javascript's string methods

function slice(){
		let test = "Click on any button to see how it works";
		let slice = test.slice(9);
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2> <br> <br> <h4>"varname.slice(8)"</h4> 
		<p>slices the text from the 9th character</p>`;
};

function substring(){
		let test = "Click on any button to see how it works";
		let slice = test.substring(10, 17);
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2> <br> <br> <h4>"varname.substring(10, 17)"</h4> 
		<p>slices the text from the 10th character and cuts off at 17th character</p>`;
};

function substr(){
		let test = "Click on any button to see how it works";
		let slice = test.substr(10, 12);
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2> <br> <br> <strong>varname.substr(10, 12)</strong> <br>
		<p>Almost the same as ".substring(), but slices from the 10th char. <br>
		and counts to the next 12 char. starting from where its cut off"</p>`;
};

function substr(){
		let test = "Click on any button to see how it works";
		let slice = test.substr(10, 12);
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2> <br> <br> <strong>varname.substr(10, 12)</strong> <br>
		<p>Almost the same as ".substring(), but slices from the 10th char. <br>
		and counts to the next 12 char. starting from where its cut off"</p>`;
};

function replace(){
		let test = "Click on any button to see how it works";
		let slice = test.replace("button", "Box");
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> replaces the word "button" with "Box"`;
};

function toUpperCase(){
		let test = "Click on any button to see how it works";
		let slice = test.toUpperCase();
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> change texts to upper case.`;
};

function toLowerCase(){
		let test = "Click on any button to see how it works";
		let slice = test.toLowerCase();
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> change texts to lower case.`;
};

function concat(){
		let test = "Click on any button to see how it works";
		let newTest = " - ha ha See me here!!!"
		let slice = test.concat(newTest); 
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> <strong> varname.concat(newVarname) </strong> 
		concatenates 2 strings together..`;
};

function trim(){
		let test = "Click on any button to see how it   works   .";
		let slice = test.trim(); 
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> <strong> string.trim() </strong> 
		Remove white spaces from all sides of the string.`;
};

function padStart(){
		let test = "Click on any button to see how it works.";
		let slice = test.padStart(50, "yes "); 
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> <strong> string.padStart() </strong> 
		pads a string with a string from the start. It returns the final string
		that is padded with the given string to the given length`;
};

function padEnd(){
		let test = "Click on any button to see how it works.";
		let slice = test.padEnd(50, "yes "); 
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> <strong> string.padEnd() </strong> 
		pads a string with a string from the end. It returns the final string
		that is padded with the given string to the given length`;
};

function charAt(){
		let test = "Click on any button to see how it works.";
		let slice = test.charAt(17); 
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> <strong> string.charAt(17) </strong> 
		 Prints out the character of a 17 position `;
};

function charCodeAt(){
		let test = "Click on any button to see how it works.";
		let slice = test.charCodeAt(15); 
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> <strong> string.charCodeAT(15) </strong> 
		 Prints out the character UNICODE of a position 15`;
};

function split(){
		let test = "Click, on, any, button, to, see, how, it, works.";
		let slice = test.split(","); 
		document.getElementById("demo").innerHTML =
		`<h2> ${slice[0]}</h2>  <br> <br> <strong> string.split(",") </strong> 
		 Converts a string to an array. in the case the first word was converted`;
};