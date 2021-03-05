var x = 5;
var y = 15;
var z = 20;
function sample() {
    return x + x,           //addition
        z - x,              //subtraction
        x * y,              //multiplication
        z / x;              //division
}
var a = sample()
document.getElementById("demo").innerHTML = sample();

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

var array = ["BMW", "Benz", "Toyota", "Jaguar"]              //cancatination
var object = { firstName: "John", lastName: "Doe", age: 43 }
document.getElementById("Str").innerHTML = "The person who owns this car is" + " " + object.firstName + " " + object.lastName + " " + "who is currently" + " " + object.age + " " + "years old and owns a" + " " + array[1];

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */

var person = "John Doe";
var statement = "The name of the person is";
document.getElementById("sample").innerHTML = statement + " " + person + ".";

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */
/* STRING METHODS */
var statement = "Hello my name is worldly God";
var position = statement.indexOf("name", 7);
var ind = statement.lastIndexOf("God");
document.getElementById("index").innerHTML = position + " " + ind;

/* -------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* STRING METHODS */
var string = "apple, orange, kiwi, banana, mango";
var pos = string.slice(7, 13);
document.getElementById("bruh").innerHTML = pos;

/* -------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* STRING METHODS */
var string = "lsadkflkadjsfdshfagsoufhal";
var len = string.length;
document.getElementById("demo1").innerHTML = len;

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* STRING METHODS */
var string = "This world was meant to be beautiful"
var pos = string.search("world");
document.getElementById("demo2").innerHTML = pos;

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* STRING METHODS */
function myFunction() {
    var str = document.getElementById("demo3").innerHTML;
    var repl = str.replace("Hello", "Goodbye");
    document.getElementById("demo3").innerHTML = repl;
}

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Array sorting */
var array = ["george", "apple", "amazon", "google", "facebook", "orcut"];
document.getElementById("demo4").innerHTML = array;
function sorting() {
    document.getElementById("demo4").innerHTML = array.sort();
}
var array = ["george", "apple", "amazon", "google", "facebook", "orcut"];
document.getElementById("demo4").innerHTML = array;
function reverse() {
    document.getElementById("demo4").innerHTML = array.reverse();
}

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------- */