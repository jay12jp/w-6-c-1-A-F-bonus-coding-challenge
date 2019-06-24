$(document).ready(function() {

//Code goes in here

var $container1 = $('container-1');
var $h1 = $('h1');
//Upper case
var str = "hello world";
var slice = str.slice(0,5);
console.log(slice);
var charAt = slice.charAt(0);
console.log(charAt);
var capitalizeFirstLetter = charAt.toUpperCase();
console.log(capitalizeFirstLetter);
var slice1=str.slice(1,5);
console.log(slice1);
var firstWord = capitalizeFirstLetter + slice1;
console.log(firstWord);

//Uppercase the entire sentence
var upperCase = str.toUpperCase();
$h1.append(upperCase);
console.log(upperCase);





});
