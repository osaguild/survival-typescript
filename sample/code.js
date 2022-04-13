// let is reassignable
let x1 = 1; // default value
x1 = 2;
let x2; // no default value
x2 = 1;

// const is not reassignable
const y = 2;
//y = 1; // TypeError: Assignment to constant variable.

// do not use var
var name = 'taro';
console.log(name); // taro
var name;
console.log(name); // taro

// var's issue
function test_var() {
  var x = 1;
  var x = 2;
  console.log(x); // 2
}
test_var();

function test_let() {
  let x = 1;
  //let x = 2; // SyntaxError: Identifier 'x' has already been declared
  console.log(x);
}
test_let();

function test_const() {
  const x = 1;
  //const x = 2; //SyntaxError: Identifier 'x' has already been declared
  console.log(x);
}
test_const();

// override global variable
//var innerWidth = 10;
//console.log(window.innerWidth); // 10

//const innerWidth = 10;
//console.log(window.innerWidth); // 500

// undefined
console.log(greeting);
var greeting = "hello"; // undefined

//console.log(greeting_l); // ReferenceError: Cannot access 'greeting_l' before initialization
let greeting_l = "hello";

//console.log(greeting_c); // ReferenceError: Cannot access 'greeting_c' before initialization
const greeting_c = "hello";

function output() {
  var x = 1;
  {
    //console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 2;
  }
}
output();

// scope
function print_var() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // 2
  }
  console.log(x); // 2
}
print_var();

function print_const() {
  const x = 1;
  if (true) {
    const x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}
print_const();

// type inference
let x3 = 1;
x3 = "hello"; // no error
console.log(x3.substring(1,3)); // el

// primitive types
//null.toString(); // TypeError: Cannot read properties of null (reading 'toString')
console.log("name".length); // 4

// boolean
const isOk1 = true;

// number
console.log(123);
console.log(-123);
console.log(20.315);
console.log(0.1 === .1); // true
console.log(5.0 === 5.); // true
console.log(0b1010); //　10
console.log(0o755); //　493
console.log(0xfff); //　4095
console.log(100_000_000); // 100000000
//console.log(5.toString); // SyntaxError: Invalid or unexpected token
//5.toString; // SyntaxError: Invalid or unexpected token
5..toString;
(5).toString;
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.25 + 0.5 === 0.75); // true
console.log(110 * 1.1); // 121.00000000000001
console.log((110 *11) / 10 === 121); // true

// string
console.log("hello"); // double quotes
console.log('hello'); // single quote
console.log(`hello`); // back quote
console.log('He said "madam, I\'m adam."');
console.log("He said \"madam, I'm adam.\"");
const count = 10;
console.log(`現在、${count}名が見ています。`); // 現在、10名が見ています。
console.log("現在、${count}名が見ています。"); // 現在、${count}名が見ています。
console.log(`税込み${Math.floor(100 * 1.1)}円`); // 税込み110円

// null 
const x = null;
console.log(x); // null
console.log(typeof null === "object"); // false

// undefined
let name1;
console.log(name1); // undefined
function func() {};
console.log(func()); // undefined
const obj = {};
console.log(obj.name); // undefined
const arr = [];
console.log(arr[0]); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(JSON.stringify({foo: undefined})); // {}
console.log(JSON.stringify({foo: null})); // {"foo":null}

// symbol
const s1 = Symbol("foo");
const s2 = Symbol("foo");
console.log(s1 === s1); // true
console.log(s1 === s2); // false

// bigint
const x6 = 100n;
console.log(x6); // 100n
const x8 = BigInt(100);
console.log(x8); // 100n
const x9 = BigInt("9007199254740991");
console.log(x9);
//2n + 3; // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(2n + BigInt(3)); // 5n

// type coercion
console.log("1" - 1); // 0
console.log("1" + 1); // 11

// boxing
const str = "abc";
const strObject = new String(str);
console.log(strObject.length); // 3
console.log(strObject.toUpperCase()); // ABC
console.log(str.length); // 3
console.log(str.toUpperCase()); // ABC
//undefined.toString(); // TypeError: Cannot read properties of undefined (reading 'toString')
//null.toString(); // TypeError: Cannot read properties of null (reading 'toString')

// any type
/*
function hello(name) {
  console.log(`hello, ${name.toUpperCase()}`); // TypeError: name.toUpperCase is not a function
}
hello(1);
*/