"use strict";

// Arrow function

const sq = x => x * x;

// Максимальное нечетное число
const arr = ["1", "3", "2", "4"];
const res = arr
  .map(el => parseInt(el))
  .filter(num => num % 2)
  .reduce((max, value) => Math.max(max, value), 0);
console.log(res);

// Параметры по умолчанию
function fetchOrderds(count = 10, start = 0) {
  console.log("Getting", count, "orders starting from", start);
}
fetchOrderds();

function findProducts(opts = { minPrice: 10, maxPrice: 20 }) {
  console.log(opts);
}
findProducts();

// Rest параметр
function max(...numbers) {
  console.log(numbers);
}
max(1, 2, 4, 51);

// spread operator
const arr2 = [1, 22, 4];
const arr3 = [2, 33, 45];
const res2 = Math.max(...arr2, ...arr3); // Максильманое число
const shallowCopy = [...arr2, ...arr2, ...arr3];
console.log(res2);
console.log(shallowCopy);

// Деструктуризация обьектов
