// object
const value1 = 123;
const value2 = 123;
console.log(value1 === value2); // true

const value3 = { value: 123 };
const value4 = { value: 123 };
console.log(value3 === value4); // false

const object = {};
const person = { name: "bob", age: 20 };
const object2 = new Object();
object2.name = "bob";
object2.age = 20;
console.log(object2);

const product = {
  name: "ミネラルウォーター",
  price: 100,
  getTaxIncludedPrice: function() {
    return Math.floor(this.price * 1.1);
  },
  shomikigen: new Date("2020-01-20"),
};
console.log(product);

const object3 = {
  printHello1: function() {
    console.log("Hello");
  },
  printHello2: function() {
    console.log("Hello");
  },
};
console.log(object3);

const calculator = {
  sum(a,b) {
    return a + b;
  },
};
console.log(calculator);
console.log(calculator.sum(1,2));
calculator.sum = null;
//console.log(calculator.sum(1,2)); // TypeError: calculator.sum is not a function

// readonly
const x = 1;
//x = 2; // TypeError: Assignment to constant variable.
const x1 = { y: 1 };
//x1 = { y: 2 }; // TypeError: Assignment to constant variable.
x1.y = 2;

// prototype 
const button = {
  name: "ボタン",
};
const dangerousButton = Object.create(button);
dangerousButton.name = "絶対に押すなよ？";
console.log(button.name);
console.log(dangerousButton.name);

class Counter {
  constructor() {
    this.count = 0;
  }

  countUp() {
    this.count ++;
  }
}

class ResetableCounter extends Counter {
  reset() {
    this.count = 0;
  }
}
counter = new ResetableCounter();
counter.countUp();
console.log(counter.count);
counter.reset();
console.log(counter.count);

const counter1 = {
  count: 0,
  countUp() {
    this.count ++;
  },
};
const resetableCounter = Object.create(counter1);
resetableCounter.reset = function() {
  this.count = 0;
};
resetableCounter.countUp();
console.log(resetableCounter.count);
resetableCounter.reset();
console.log(resetableCounter.count);

// optional chaining
const book = undefined;
//const title = book.title; // error TS2532: Object is possibly 'undefined'.
const author = null;
//const email = author.email; // error TS2531: Object is possibly 'null'.

const book2 = undefined;
const title2 = book2 === null || book2 === undefined ? undefined : book2.title;
console.log(title2);

const book3 = {title:"サバイバルTypeScript"};
const title3 = book3 === null || book3 === undefined ? undefined : book3.title;
console.log(title3);

//const book4 = {author: {email: "alice@example.com"}};
//const book4 = {author: {email: undefined}};
//const book4 = {author: {email: null}};
//const book4 = {author: null};
//const book4 = {author: undefined};
const book4 = {};
const authorEmail =
  book4 === null || book4 === undefined
    ? undefined
    : book4.author === null || book4.author === undefined
      ? undefined
      : book4.author.email === null || book4.author.email === undefined
        ? undefined
        : book4.author.email;
console.log(authorEmail);

const book5 = undefined;
const title5 = book5?.title; // undefined
//const title5 = book5.title; // SyntaxError: Identifier 'title5' has already been declared
console.log(title5)

const book6 = {title:"サバイバルTypeScript"};
const title6 = book6?.title;
console.log(title6);

const book7 = undefined;
const authorEmail7 = book7?.author?.email;
console.log(authorEmail7);

const book8 = {author: {email: "alice@example.com"}};
const authorEmail8 = book8?.author?.email;
console.log(authorEmail8);

const book9 = null;
console.log(book9?.title);

const book10 = {author: null};
console.log(book10.author?.name);

const increment = undefined;
const result = increment?.(1);
console.log(result);

const increment2 = (n) => n + 1;
const result2 = increment2?.(1);
console.log(result2);

const book11 = { getPrice: undefined };
console.log(book11.getPrice?.());

const book12 = {
  getPrice() {
    return 0;
  },
};
console.log(book12.getPrice?.());

const books = undefined;
const title = books?.[0];
console.log(title);

const books2 = ["サバイバルTypeScript"];
const title7 = books2?.[0];
console.log(title7);

// loop
const foo = {a:1, b:2, c:3};
for (const prop in foo) {
  console.log(prop,foo[prop]);
}
console.log(Object.getPrototypeOf(foo) === Object.prototype);

const foo3 = {a:1, b:2, c:3};
const date3 = new Date();
const arr3 = [1,2,3];
console.log(foo3.hi,date3.hi,arr3.hi); // undefined undefined undefined
Object.prototype.hi = "Hi!";
console.log(foo3.hi,date3.hi,arr3.hi); // Hi! Hi! Hi!
for (const prop in foo3) {
  console.log(prop,foo3[prop]);
}
for (const prop in foo3) {
  if (Object.prototype.hasOwnProperty.call(foo,prop)) {
    console.log(prop,foo3[prop]);
  }
}
for (const [key, value] of Object.entries(foo3)) {
  console.log(key,value);
}
for (const key of Object.keys(foo3)) {
  console.log(key);
}
for (const value of Object.values(foo3)) {
  console.log(value);
}