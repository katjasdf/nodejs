/* Muunna seuraavat funktiot ES6-syntaksin mukaisiksi ja talleta ne es6ify.js-tiedostoon.

function hello() {
 console.log('Hello, World!');
}
function sayHi(name) {
 console.log('Hi ' + name + '!');
}
function multiplyByTen(a) {
 return a * 10;
}
function sum(a, b) {
 return a + b;
}
function power(base, exponent) {
 var result = 1;
 for (var count = 0; count < exponent; count++) {
 result *= base;
 }
 return result;
};
*/

hello = () => console.log("Hello, World!");

sayHi = (name) => console.log("Hi " + name + "!");

multiplyByTen = (a, b = 10) => { return a * b };

sum = (a, b) => { return a + b };

power = (base, exponent) => { return result = Math.pow(base, exponent) };

hello();
sayHi('Katja');
console.log(multiplyByTen(5));
console.log(sum(5, 1));
console.log(power(5, 2));