// 1. For
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2. While
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// 3. Do While
let j = 0;
do {
  console.log(fruits[j]);
  j++;
} while (j < fruits.length);

// 4. For of
for (const fruit of fruits) {
  console.log(fruit);
}

// 5. For in
const me = {
  name: "Misbah",
  age: 22,
  city: "Pangandaran",
};

for (const key in me) {
  console.log(me[key]);
}
