// object type annotation
let box: { width: number, height: number };
box = { width: 100, height: 200 }; // ok
//box = { width: "100", height: 200 }; // error TS2322: Type 'string' is not assignable to type 'number'.
//box = { width: 100 }; // error TS2741: Property 'height' is missing in type '{ width: number; }' but required in type '{ width: number; height: number; }'.
type Box = { width: number, height: number };
let box2: Box = { width: 100, height: 200 }; // ok
//let box3: Box = { width: "100", height: 200 }; // error TS2322: Type 'string' is not assignable to type 'number'.
let calculator2: {
  sum(x: number, y:number): number;
};
calculator2 = {
  sum(x,y) {
    return x + y;
  },
};
console.log(calculator2.sum(1,2));
let calculator3: {
  sum: (x: number, y:number) => number;
};
calculator3 = {
  sum(x,y) {
    return x + y;
  },
};
console.log(calculator3.sum(1,2));

let foo: Record<string,number>;
foo = {a:1,b:2};
console.log(foo);

let box3: Object;
box3 = { width: 100, height: 200 };
//console.log(box3.width); // error TS2339: Property 'width' does not exist on type 'Object'.

// readonly property
let obj: {
  readonly foo: number;
};
obj = { foo: 1 };
//obj.foo = 2; // error TS2540: Cannot assign to 'foo' because it is a read-only property.

let obj2: {
  readonly foo: {
    bar: number;
  };
};
obj2 = { 
  foo: { 
    bar: 1 
  },
};
//obj2.foo = { bar: 2 }; // error TS2540: Cannot assign to 'foo' because it is a read-only property.
obj2.foo.bar = 2; // ok

let obj3: {
  readonly foo: {
    readonly bar: number;
  },
};
obj3 = {
  foo: {
    bar: 1,
  },
};
//obj3.foo.bar = 2;  // error TS2540: Cannot assign to 'bar' because it is a read-only property.

let obj4: Readonly<{
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}>;
obj4 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
};
//obj4.b = 3; // error TS2540: Cannot assign to 'b' because it is a read-only property.

let obj5: {readonly x2: number} = {x2: 1};
obj5 = {x2: 2}; // ok
//obj5.x = 2; // error TS2339: Property 'x' does not exist on type '{ readonly x2: number; }'.

const obj6: {readonly x3: number} = {x3: 1};
//obj6 = {x3: 2}; // error TS2339: Property 'x' does not exist on type '{ readonly x3: number; }'.
//obj6.x = 2; // error TS2339: Property 'x' does not exist on type '{ readonly x3: number; }'.

// optional property
let size: {width:number};
size = {width: 100}; // ok
//size = {}; // error TS2741: Property 'width' is missing in type '{}' but required in type '{ width: number; }'.

let size1: {width?:number};
size1 = {width: 100}; // ok
size1 = {}; // ok
size1 = {width: undefined}; // ok
//size1 = {width: null}; // error TS2322: Type 'null' is not assignable to type 'number | undefined'.

// excess property checking
let onlyX: {x: number};
onlyX = {x: 1}; // ok
//onlyX = {x: 1, y: 2}; // error TS2322: Type '{ x: number; y: number; }' is not assignable to type '{ x: number; }'.

const xy : {x: number, y: number} = {x: 1, y: 2};
let onlyX1: {x: number};
onlyX1 = xy; // ok

// index signature
let obj7: {
  [K: string]: number;
}
obj7 = {a:1, b:2}; // ok
obj7.c = 3; // ok
obj7["d"] = 4; // ok

const obj8: {[K: string]: number} = {a:1};
const b: number | undefined = obj8.b;
console.log(b); // undefined

let obj9: {[K: string]: number};
obj9 = {a:1}; // ok
obj9.b = 2; // ok
let obj10: Record<string,number>;
obj10 = {a:1}; //ok
obj10.b = 2; // ok

// object Object {}
let a1: object;
let b1: Object;
let c1: {};

const a2: object = {};
const b2: Object = {};
const c2: {} = {};

let a3: object;
a3 = {x:1}; // ok
a3 = [1,2,3]; // ok
a3 = /a-z/; // ok
//a3 = 1; // error TS2322: Type 'string' is not assignable to type 'object'.
//a3 = true; // error TS2322: Type 'string' is not assignable to type 'object'.
//a3 = "string"; // error TS2322: Type 'string' is not assignable to type 'object'.
//a3 = null; // error TS2322: Type 'null' is not assignable to type 'object'.
//a3 = undefined; // error TS2322: Type 'undefined' is not assignable to type 'object'.

let b3: Object;
b3 = {x:1}; // ok
b3 = [1,2,3]; // ok
b3 = /a-z/; // ok
b3 = {}; // ok
b3 = 1; // ok
b3 = true; // ok
b3 = "string"; // ok
//b3 = null; // error TS2322: Type 'null' is not assignable to type 'Object'.
//b3 = undefined; // error TS2322: Type 'undefined' is not assignable to type 'Object'.

let c3: {};
c3 = {x:1}; // ok
c3 = [1,2,3]; // ok
c3 = /a-z/; // ok
c3 = {}; // ok
c3 = 1; // ok
c3 = true; // ok
c3 = "string"; // ok
//c3 = null; // error TS2322: Type 'null' is not assignable to type '{}'.
//c3 = undefined; // error TS2322: Type 'undefined' is not assignable to type '{}'.

// destructuring assignment
type Wild = {
  name2: string;
  no2: number;
  genre2: string;
  height2: number;
  weight2: number;
};
const pokemon: Wild = {
  name2: "Pikachu",
  no2: 25,
  genre2: "mouse",
  height2: 0.4,
  weight2: 6.0,
};
//const name: string = pokemon.name;
//const no: number = pokemon.no;
//const genre: string = pokemon.genre
//const {name2, no2, genre2} = pokemon;
//console.log(name3, no3, genre3);

type Country = {
  name: string;
  captalCity: string;
};
type Continent = {
  name: string;
  canada: Country;
  us: Country;
  mexico: Country;
};

// shorthand property
const name2: string = "pikache";
const no2: number = 25;
const genre2: string = "mouse pokemon";
const height2: number = 0.4;
const weight2: number = 6.0;

const pikachu: Wild = {
  name2,
  no2,
  genre2,
  height2,
  weight2,
};

const pikachu2: Wild = {
  name2: name2,
  no2: no2,
  genre2: genre2,
  height2: height2,
  weight2: weight2,
};

// optional chaining
let book13: undefined | {title: string};
const title13 = book13?.title;

let book14: undefined | {title: string};
const title14 = book14?.title ?? "デフォルトタイトル";
console.log(title14);

// roop