/* 
String methods
.chartAt() = mengembalikan karakter pada index tertentu
.concat() = menggabungkan string
.includes() = mengecek apakah string memiliki kata tertentu
.indexOf() = mengembalikan index dari kata tertentu
.lastIndexOf() = mengembalikan index terakhir dari kata tertentu
.slice() = mengembalikan bagian string tertentu
.split() = mengembalikan bagian string tertentu
.toLowerCase() = mengubah string menjadi huruf kecil
.toUpperCase() = mengubah string menjadi huruf besar
.trim() = menghilangkan spasi di awal dan akhir
.replace() = mengganti kata tertentu
.startsWith() = mengecek apakah string dimulai dengan kata tertentu
*/
const text =
  "Hello World! my name si Misbah, i'm software engineer spefially frontend developer.";

// Task: Give me the first character of the Name in the text
// .chartAt()
const index = text.indexOf("Misbah");
console.log(text.charAt(index)); // M

// .concat()
const text2 = "I actually live in Pangandaran";
console.log(text.concat(" ", text2)); // Hello World! my name si Misbah, i'm software engineer spefially frontend developer. I actually live in Pangandaran

// .includes()
console.log(text.includes("Misbah")); // true

// .indexOf()
console.log(text.indexOf("Misbah")); // 25

// .lastIndexOf()
console.log(text.lastIndexOf("Misbah")); // 25

// .slice()
console.log(text.slice(32)); // i'm software engineer spefially frontend developer.
console.log(text.slice(24, 30)); // Misbah

// .split()
console.log(text.split(" ")); // ['Hello', 'World!', 'my', 'name', 'si', 'Misbah,', "i'm", 'software', 'engineer', 'spefially', 'frontend', 'developer.']

// .toLowerCase()
console.log(text.toLowerCase()); // hello world! my name si misbah, i'm software engineer spefially frontend developer.

// .toUpperCase()
console.log(text.toUpperCase()); // HELLO WORLD! MY NAME SI MISBAH, I'M SOFTWARE ENGINEER SPEFIALY FRONTEND DEVELOPER.

const textRandom = " Charge the battery ";
// .trim()
console.log(textRandom.trim()); // Charge the battery

// .replace()
console.log(textRandom.replace("Charge", "Discharge")); // Discharge the battery

// .startsWith()
console.log(text.startsWith("Hello")); // true
