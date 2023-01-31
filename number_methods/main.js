/* Advance Javascript Learning process and practice,
* They are all writing into a button function
* Author: Patrick Fidel
* Date: 30/01/2023
* Github: https://www.github.com/patthrills
*/


//Javascript's Array methods
let arr = [10, 20, 45, 101, 70, 81, 30, 2];

//.toString() method
function method_1(){
    let num_1 = arr[2];
    let method = num_1.toString();
    document.getElementById("demo").innerHTML = `<h2>[${arr}]</h2> using 
    <strong>${num_1}</strong> <br> The <strong>number.toString()</strong>
    result will be <strong>${method}</strong> <br> The toString() method 
    converts numbers to strings`;
};

// .toExponential() method
function method_2(){
    let num_1 = arr[7];
    let method = num_1.toExponential(2);
    document.getElementById("demo").innerHTML = `<h2>[${arr}]</h2> using 
    <strong>${num_1}</strong> <br> The <strong>number.toExponential(2)</strong>
    result will be <strong>${method}</strong> <br> it returns 
    a string, with a number rounded and written using exponential notation.`;
};

function method_3(){
    let num_1 = arr[5] / arr[7];
    let method = num_1.toFixed(2);
    document.getElementById("demo").innerHTML = `<h2>[${arr}]</h2> using 
    <strong>${num_1}</strong> <br> The <strong>number.toFixed(2)</strong>
    result will be <strong>${method}</strong> <br> it returns a string, 
    with the number written with a specified number of decimals.`;
};

function method_4(){
    let num_1 = arr[5] / arr[7];
    let method = num_1.toPrecision(2);
    document.getElementById("demo").innerHTML = `<h2>[${arr}]</h2> using 
    <strong>${num_1}</strong> <br> The <strong>number.toPrecision(2)</strong>
    result will be <strong>${method}</strong> <br> it returns a string, 
    with the number written with a specified length.`;
};

function method_5(){
    let num_1 = arr[5];
    let test = "Testing text"
    let method = Number.isInteger(num_1);
    let method1 = Number.isInteger(test);
    document.getElementById("demo").innerHTML = ` using <strong>${num_1}</strong> <br> 
    The number above is an Integer: <strong>${method}</strong> <br> <br>
    using <strong>"${test}"</strong> <br> 
    The text above is an Integer: <strong>${method1}</strong>`;
};