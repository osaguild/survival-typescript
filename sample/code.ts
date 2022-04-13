// type annotation
const num: number = 123;

// type inference
//let x3 = 1;
//x3 = "hello"; //Type 'string' is not assignable to type 'number'.ts(2322)
//console.log(x3.substring(1,3)); //Property 'substring' does not exist on type 'number'.ts(2339)

// boolean 
const isOk2: boolean = true;

// number
const price = parseInt("百円");
if (Number.isNaN(price)) {
  console.log("数値化できません");
}
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// string
const message: string = "hello" + "world";
console.log(message); // helloworld
console.log(message + "!"); // helloworld!

// null
const x4: null = null;
console.log(x4); // null

// undefined
const x5: undefined = undefined;
console.log(x5); // undefined

// symbol
const s: symbol = Symbol();
console.log(s); // Symbol()

// bigint
const x7: bigint = 100n;
console.log(x7); // 100n

// boxing
const bool: Boolean = false;
const num2: Number = 0;
const st: String = "";
const sys: Symbol = Symbol();
const big: BigInt = 10n;
const n1: Number = 0;
//const n2: number = n1; // error TS2322: Type 'Number' is not assignable to type 'number'.'number' is a primitive, but 'Number' is a wrapper object. Prefer using 'number' when possible.
const n3: number = 0;
const n4: Number = n3; // ok
const num3: Number = 1;
//num3 * 2; // error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
const boolLike = {
  valueOf(): boolean {
    return true;
  },
};
const bool2: Boolean = boolLike;
console.log(bool2.valueOf()); // true
//const bool3: boolean = boolLike; // Type '{ valueOf(): boolean; }' is not assignable to type 'boolean'.

// literal type
let x10: number;
x10 = 1;
let x11: 1;
x11 = 1; // ok
//x11 = 100; // error TS2322: Type '100' is not assignable to type '1'.
let isTrue: true = true;
//isTrue = false; // error TS2322: Type 'false' is not assignable to type 'true'.
const num4: 123 = 123;
const str1 : "foo" = "foo";
let status2: 1 | 2 | 3 = 1; // ok
//status2 = 4; // error TS2322: Type '4' is not assignable to type '1 | 2 | 3'.

// any type
let value: any;
value = 1;
value = "string";
value = {name:"オブジェクト"};
const str2: any = 123;
//str2.toLowerCase(); // TypeError: str2.toLowerCase is not a function
/*
function hello(name) { // error TS7006: Parameter 'name' implicitly has an 'any' type.
  console.log(`hello, ${name.toUpperCase()}`);
}
hello(1);
*/