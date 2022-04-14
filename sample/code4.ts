import { addAbortSignal } from "stream";

// array
let array: number[];
array = [1, 2, 3];

let array2: Array<number>;;
array2 = [1, 2, 3];

const list1 = [1, 2, 3];
const list2 = [1, 2, 3];
console.log(list1 === list2); // false

const abc = ["a", "b", "c"];
console.log(abc[0]); // a
console.log(abc[100]); // undefined

const abc2: string[] = ["a", "b", "c"];
const character: string = abc2[0];
console.log(character); // a
const character2: string = abc2[100];
console.log(character2); // undefined
//character2.toUpperCase(); // TypeError: Cannot read properties of undefined (reading 'toUpperCase')
const character3: string | undefined = abc2[0];
if (typeof character3 === "string") {
  console.log(character3.toUpperCase()); // A
}

const nums: readonly number[] = [1, 2, 3];
const nums2: ReadonlyArray<number> = [1, 2, 3];
//nums.push(4); // error TS2339: Property 'push' does not exist on type 'readonly number[]'.
//nums2.push(4); // error TS2339: Property 'push' does not exist on type 'readonly number[]'.
console.log('pop' in nums);
// @ts-ignore
nums.push(4);
console.log(nums);

const readonlyNumbers: readonly number[] = [1, 2, 3];
//const writableNubmers: number[] = readonlyNumbers; // error TS4104: The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
const writableNubmers: number[] = readonlyNumbers as number[];

// destructuring assignment
const oneToFive = [1, 2, 3, 4, 5];
const [one, two, three] = oneToFive;
console.log(one, two, three); // 1 2 3
const num: number = one;

const twoByTwo = [
  [1, 2],
  [3, 4],
];
const [[one2, tow2], [three2]] = twoByTwo;
console.log(one2, tow2, three2); // 1 2 3

const [, , , four, five] = oneToFive;
console.log(four, five); // 4 5

const [one3, ...rest] = oneToFive;
console.log(one3);
console.log(rest); // [2, 3, 4, 5]

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(nums3);
console.log(nums4);
const all = nums3.concat(nums4);
console.log(all);

const nums5 = [1, 2, 3];
const newNums = nums5.reverse();
console.log(nums5);

const original = [1, 2, 3, 4, 5];
const copy = [...original];
copy.reverse();
console.log(original);
console.log(copy);

// for 
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === "b") {
    break;
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "a") {
    continue;
  }
  console.log(arr[i]);
}

// for of
for (const value of arr) {
  console.log(value);
}

// array
arr.forEach((value, i) => {
  console.log(value, i);
});

const arr2 = arr.map((value) => value + value);
console.log(arr2);

// spread syntax
const arr3 = [];
for (const item of arr) {
  arr3.push(item);
}
arr3.push(4);
console.log(arr3);
const arr4 = [...arr, 4];
console.log(arr4);
const arr5 = [...arr];
console.log(arr5);
const arr6 = [...arr, ...arr];
console.log(arr6);

// covariance
type Animal = { isAnimal: boolean };
type Dog = { isAnimal: boolean, isDog: boolean };
let pochi: Dog = { isAnimal: true, isDog: true };
let animal: Animal = pochi;
console.log(animal);
let animal2: Animal = { isAnimal: true };
//let pochi2: Dog = animal2; // error TS2741: Property 'isDog' is missing in type 'Animal' but required in type 'Dog'.

const dogs: Dog[] = [pochi];
const animals: Animal[] = dogs;
console.log(animals);

type Animal2 = { isAnimal: boolean };
type Dog2 = {
  isAnimal: boolean;
  wanwan(): string;
};
const pochi2 = {
  isAnimal: true,
  wanwan() {
    return "wanwan";
  },
};

const dogs2: Dog2[] = [pochi2];
const animals2: Animal2[] = dogs2;
animals2[0] = { isAnimal: true };
const mayBePochi2: Dog2 = dogs2[0];
//mayBePochi2.wanwan(); // TypeError: mayBePochi2.wanwan is not a function

// tuple
function tuple() {
  return [1, "ok", true];
}
console.log(tuple()[0]);

const list3: unknown[] = tuple();
//list3[0].toString(); // error TS2571: Object is of type 'unknown'.

function tuple2(): [number, string, boolean] {
  return [1, "ok", true];
}
const list4: [number, string, boolean] = tuple2();
console.log(tuple2()[0], tuple2()[1], tuple2()[2]);
console.log(list4[0].toExponential(), list4[1].length, list4[2].valueOf());

const [num2, str2, bool2]: [number, string, boolean] = tuple2();
const [, , bool3]: [number, string, boolean] = tuple2();
console.log(num2, str2, bool2);
console.log(bool3);

/*
async function take3Seconds(): Promise<string> {
  return "finished";
}
async function take5Seconds(): Promise<number> {
  return -1;
}
const tuple3: [string, number] = await Promise.all([
  take3Seconds(),
  take5Seconds(),
])
console.log(tuple3);
*/

enum Position {
  top, right, bottom, left
}
console.log(Position.top, Position.right, Position.bottom, Position.left);
const right: Position = Position.right; // ok
//const top: Position = "top"; // ng
enum Position2 {
  top = 1, rihgt, bottom, left
}
console.log(Position2);
enum Position3 {
  top = "a", right = "b", bottom = "c", left = "d"
}
console.log(Position3);
console.log(Position3.top);

type YesNo = "yes" | "no";
function toJapanese(yesno: YesNo) {
  switch (yesno) {
    case "yes":
      return "はい";
    case "no":
      return "いいえ";
  }
}
console.log(toJapanese("yes"));
const yes = Symbol();
const no = Symbol();
type YesNo2 = typeof yes | typeof no;
function toJapanese2(yesno: YesNo2) {
  switch (yesno) {
    case yes:
      return "はい";
    case no:
      return "いいえ";
  }
}
console.log(toJapanese2(yes));
//console.log(toJapanese2("yes")); // error TS2345: Argument of type '"yes"' is not assignable to parameter of type 'YesNo2'.

const position4 = {
  top: 0,
  right: 1,
  bottom: 2,
  left: 3,
} as const;
type Position4 = typeof position4[keyof typeof position4];
function toJapanese3(position: Position4) {
  switch (position) {
    case position4.top:
      return "上";
    case position4.right:
      return "右";
    case position4.bottom:
      return "下";
    case position4.left:
      return "左";
  }
}
console.log(position4);
console.log(toJapanese3(position4.top));

// union
let numberOrUndefined: number | undefined;
type ErrorCode = 400|401|402|403|404|405;
numberOrUndefined = 404;
console.log(numberOrUndefined);
numberOrUndefined = undefined;
console.log(numberOrUndefined);
//numberOrUndefined = "404";
//console.log(numberOrUndefined); //error TS2322: Type 'string' is not assignable to type 'number'.
const code404: ErrorCode = 404;
console.log(code404);
//const code500: errorCode = 500; // error TS2552: Cannot find name 'errorCode'. Did you mean 'ErrorCode'?
type List5 = string | number[];
type List6 = (string | number)[];
const a1: List5 = "ok";
const a2: List5 = [1, 2, 3];
//const a3: List5 = ["ok", "ng"]; // error TS2322: Type 'string[]' is not assignable to type 'List5'.
//const b1: List6 = "ok"; // error TS2322: Type 'string' is not assignable to type 'List6'.
const b2: List6 = [1, 2, 3];
const b3: List6 = ["ok", "ng"];

const mayBeUserId: string | null = null;
if (typeof mayBeUserId === "string") {
  const userId = mayBeUserId;
}

type UploadStatus = Inprogress | Success | Failure;
type Inprogress = {done: boolean; progress: number};
type Success = {done: boolean};
type Failure = {done: boolean; error: Error};
function PrintStatus(status: UploadStatus) {
  if (status.done === false && "progress" in status) {
    console.log(`アップロード中:${status.progress}%`);
  } else if (status.done === true && "error" in status) {
    console.log(`失敗:${status.error.message}`);
  } else {
    console.log("成功");
  }
}
const inporgress: Inprogress = {done: false, progress: 50};
const success: Success = {done: true};
const failure: Failure = {done: true, error: new Error("xxx exception")};
PrintStatus(inporgress);
PrintStatus(success);
PrintStatus(failure);

type OkOrBadRequest =
  | {statusCode: 200; value: string}
  | {statusCode: 400; message: string};
function handleResponse(x: OkOrBadRequest) {
  if (x.statusCode === 200) {
    console.log(x.value);
  } else {
    console.log(x.message);
  }
}
const okRequest: OkOrBadRequest = {statusCode: 200, value: "ok"};
const badRequest: OkOrBadRequest = {statusCode: 400, message: "bad request"};
handleResponse(okRequest);
handleResponse(badRequest);

type Shape =
  | {type: "circle"; color: string; radius: number}
  | {type: "square"; color: string; size: number};
function toCSS(shape: Shape) {
  switch (shape.type) {
    case "circle":
      return {
        backgroundColor: shape.color,
        borderRadius: shape.radius,
      };
    case "square":
      return {
        backgroundColor: shape.color,
        borderRadius: shape.size,
      };
  }
}
const circle: Shape = {type: "circle", color: "red", radius: 100};
const square: Shape = {type: "square", color: "blue", size: 100};
console.log(toCSS(circle));
console.log(toCSS(square));

// intersection type
type TwoDimensionalPoint = {
  x: number;
  y: number;
};
type Z = {
  z: number;
};
type ThreeDimensionalPoint = TwoDimensionalPoint & Z;
const p: ThreeDimensionalPoint = {
  x: 1,
  y: 2,
  z: 3,
};
type Never = string & number;
//const n: Never = "never"; // error TS2322: Type 'string' is not assignable to type 'never'.
type Parameter = {
  id: string;
  index?: number;
  active: boolean;
  age?: number;
}
const param1: Parameter = {
  id: "id",
  index: 1,
  active: true,
  age:  20,
}
const param2: Parameter = {
  id: "id",
  active: true,
}

// type alias
//type String = string; // error TS2300: Duplicate identifier 'String'.
type OK = 200;
type Numbers = number[];
type UserObject = { id: number; name: string };
type NumberOrNull = number | null;
type CallbackFunction = (value: string) => boolean;
const num6: Numbers = [1, 2, 3];
const user: UserObject = {id: 1, name: "taro"};1
const num7: NumberOrNull = null;
const callback: CallbackFunction = function (value: string) {
  return true;
}
console.log(callback("ok"));
const callback1: CallbackFunction = (value: string) => false;
console.log(callback1("false"));

// type assertion
const value: string | number = "this is string";
const strLength: number = (value as string).length;
const strLength1: number = (<string>value).length;
//const num8: number = 123 as string; // error TS2352: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
const num8: number = "123" as unknown as number;
const pikachu = {
  name: "pikachu",
  no: 25,
} as const;
//pikachu.name = "raichu"; // error TS2540: Cannot assign to 'name' because it is a read-only property.
let num9!: number;
initNum();
console.log(num9 * 2);
function initNum() {
  num9 = 2;
}
class Foo {
  num1: number = 1;
  num2: number;
  num3!: number; // error TS2564: Property 'num3' has no initializer and is not definitely assigned in the constructor.

  constructor() {
    this.num2 = 2;
    this.initNum();
  }

  initNum() {
    this.num3 = 3;
  }
}

// type of
console.log(typeof true, typeof 0, typeof "hello world", typeof undefined, typeof null,
  typeof Symbol(), typeof 1n, typeof [1,2,3], typeof {a:1,b:2});

function isObject(value : unknown) {
  return typeof value !== null && typeof value === "object";
}
console.log(isObject(null));