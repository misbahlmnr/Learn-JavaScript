const umur = 22;
console.log(typeof umur); // number

let name = "Misbah";
console.log(typeof name); // string

let isMarried = false;
console.log(typeof isMarried); // boolean

let whenIMarried;
console.log(typeof whenIMarried); // undefined

// Note: typeof null === "object" is bug in js
let nullValue = null;
console.log(typeof nullValue); // object

const me = {
  name: "Misbah",
  age: 22,
  isMarried: false,
  whenIMarried: null,
};
console.log(typeof me); // object

// Note: typeof array === "object", but u can check with Array.isArray
const arr = [1, 2, 3];
console.log(Array.isArray(arr));

const sayHello = () => {
  console.log("Hello");
};
console.log(typeof sayHello); // function
