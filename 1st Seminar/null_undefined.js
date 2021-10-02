console.log(typeof 1); // number
console.log(typeof "str"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object? -> JS의 버그

// null vs undefined
console.log("null == undefined ", null == undefined); // true
console.log("null === undefined ", null === undefined); // false