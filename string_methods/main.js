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
		let slice = test.toUpperCase();
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> change texts to upper case.`;
};

function concat(){
		let test = "Click on any button to see how it works";
		let newTest = "See me here!!!"
		let slice = test.concat(newTest); 
		document.getElementById("demo").innerHTML = 
		`<h2> ${slice}</h2>  <br> <br> <strong> varname.concat(newVarname) </strong> 
		change texts to upper case.`;
};