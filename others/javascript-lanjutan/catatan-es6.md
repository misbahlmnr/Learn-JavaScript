# Catatan ES6

## Mencegah Mutasi Pada Object

> Untuk mencegah mutasi pada object anda bisa menggunakan keyword Object.freeze(obj);

## Mendapatkan angka paling besar dalam sebuah array

> untuk mendapatkan nilai paling besar dari suatu array bisa menggunakan ini

```
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

> bisa juga dengan menggunakan spread operator

```
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```
