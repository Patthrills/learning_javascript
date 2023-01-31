/* Advance Javascript Learning process and practice,
* They are all writing into a button function
* Author: Patrick Fidel
* Date: 30/01/2023
* Github: https://www.github.com/patthrills
*/


//Javascript's string Search
 const test = "Where am I located, tell me where I am located flo!"
 
 function indexOf(){
	 let index = test.indexOf("located");
	 document. getElementById("demo").innerHTML =
	 `<h2>${index}</h2> <br> <br> <strong>string.indexOf("located")</strong> <br>
	 shows the positon of the firdt word in a string.`;
 };
 
 function lastIndexOf(){
	 let index = test.lastIndexOf("located");
	 document. getElementById("demo").innerHTML =
	 `<h2>${index}</h2> <br> <br> <strong>string.lastIndexOf("located")</strong> <br>
	 shows the  positon of the last word in a string.`;
 };
 
  function match(){
	 let index = test.match(/ocate/gi);
	 document. getElementById("demo").innerHTML =
	 `<h2>${index}</h2> <br> <br> <strong>string.match(/ocate/gi)</strong> <br>
	 returns an array containing the results of matching a string against a 
	 string (or a regular expression)..`;
 };
 
   function includes(){
	 let index = test.includes("am");
	 document. getElementById("demo").innerHTML =
	 `<h2>${index}</h2> <br> <br> <strong> string.includes("am") </strong> <br>
	 checks if a text is included in a string, returns true/false.`;
 };
 
   function startsWith(){
	 let index = test.startsWith("Where");
	 document. getElementById("demo").innerHTML =
	 `<h2>${index}</h2> <br> <br> <strong>string.startsWith("Where")</strong> <br>
	returns true/false`;
 };
 
    function endsWith(){
	 let index = test.endsWith("Where");
	 document. getElementById("demo").innerHTML =
	 `<h2>${index}</h2> <br> <br> <strong>string.endsWith("Where")</strong> <br>
	returns true/false`;
 };