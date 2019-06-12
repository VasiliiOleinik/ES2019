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
/////////////////////////////////////////////////////
// Параметры по умолчанию
function fetchOrderds(count = 10, start = 0) {
  console.log("Getting", count, "orders starting from", start);
}
fetchOrderds();

function findProducts(opts = { minPrice: 10, maxPrice: 20 }) {
  console.log(opts);
}
findProducts();
///////////////////////////////////////////////
// Rest параметр
function max(...numbers) {
  console.log(numbers);
}
max(1, 2, 4, 51);
////////////////////////////////////////////
// spread operator
const arr2 = [1, 22, 4];
const arr3 = [2, 33, 45];
const res2 = Math.max(...arr2, ...arr3); // Максильманое число
const shallowCopy = [...arr2, ...arr2, ...arr3];
console.log(res2);
console.log(shallowCopy);
/////////////////////////////////////////////////
// Деструктуризация обьектов
const person = {
  firstName: "Peter",
  lastName: "Smith",
  age: "27"
};

//old
// const firstName = person.firstName;
// const lastName = person.lastName;

//destructurization
const { firstName, lastName } = person;
console.log(firstName, lastName);

const person2 = {
  name: {
    firstName2: "Peter2",
    lastName2: "Smith2"
  },
  age: "27",
  role: "admin"
};

const {
  name: { firstName2: youName, lastName2: youSecondName }
} = person2;
console.log(youName, youSecondName);

const { permissions: { role = "user" } = {} } = person2;
console.log(role);

//old
function connect(options) {}
connect({
  host: "localhost",
  post: 1929,
  user: "peter"
});

function connect({ host = "localhost", port = 12345, user = "guest" }) {
  console.log("user: ", user, "port: ", port, "host: ", host);
}
connect({ port: 1111 });

// Destructing + rest
const dict = {
  duck: "quack",
  dog: "wuff",
  mouse: "squeak"
};
const { duck, ...otherAnimals } = dict;
console.log(otherAnimals);

////////////////////////////////////////////////
// Деструктуризация массивов

const fib = [1, 1, 2, 3, 5, 8, 13];
const [, a, , b, c] = fib;
console.log(a, b, c);

const line = [[10, 17], [14, 7]];
const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y);

const people = ["chris", "sandra", "bob"];
// const [a2, b2, c2 = 'guest'] = people;
const [a2, ...others] = people;
console.log(others);

const speak = {
  duck: "quack",
  dog: "wuff",
  mouse: "squeak",
  hamster: "squeak"
};
const result = Object.entries(speak)
  .filter(([, value]) => value === "squeak")
  .map(([key]) => key);
console.log(result);

const shape = {
  type: "segment",
  coord: {
    start: [10, 15],
    end: [18, 22]
  }
};
const {
  coord: {
    start: [startX, startY],
    end: [endX, endY]
  }
} = shape;
console.log(startX, startY, endX, endY);

////////////////////////////////////
// Обьекты

const x = 10;
const y = 30;
const point = {
  x,
  y,

  draw(ctx) {
    // ...
  }
};

const prefix = "_blah_";
const data = {
  [prefix + "name"]: "Bob",
  [prefix + "age"]: 23
};

// обьединение обьектов и перезапись
const defaults = {
  host: "localhost",
  dbName: "blog",
  user: "admib"
};
const opts = {
  user: "John",
  pass: "pass"
};

const res33 = Object.assign({}, defaults, opts);
console.log(res33);

///////////////////////////////////////
// Spread operator for objects

const opt1 = {
  host: "localhost",
  dbName: "blog",
  user: "admin"
};
const opt2 = {
  user: "John",
  pass: "pass"
};
const port = 8888;
const optRes = { ...opt1, ...opt2, port, connect() {} };
console.log(optRes);

////////////////////////////////
// Prototypes
// 1. Object.setPrototypeOf
// 2. Object.create
// 3. using new

// const animal = {
//   say: function() {
//     console.log(this.name, "goes", this.voice);
//   }
// };
//  const dog = {
//    name: "dog",
//    voice: "woof"
//  };
//  const cat = {
//    name: "cat",
//    voice: "meow"
//  };
// dog.say();
// cat.say();
///////
// const dog = Object.create(animal);
// dog.name = 'dog';
// dog.voice = "woof";
// dog.say();
////////////
// function createAnimal(name, voice){
//   const resultAnimal = Object.create(animal);
//   resultAnimal.name = name;
//   resultAnimal.voice = voice;
//   return resultAnimal;
// }
// const dog = createAnimal('dog', 'woof');
// const cat = createAnimal('cat', 'meow');
// dog.say();
// cat.say();
///////////////
function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}
Animal.prototype.say = function() {
  console.log(this.name, "goes", this.voice);
};
const dog = new Animal("dog", "woof");
const cat = new Animal("cat", "meow");
dog.say();
cat.say();

/////////////////////////////////////
// Classes
class Animals {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }
  says() {
    console.log(this.name, "goes", this.voice);
  }
}
// duck -> Bird.prorotype -> Animal.prototype -> Oblect.prototype -> null
class Bird extends Animals {
  constructor(name, voice, canFly) {
    super(name, voice);
    super.says();
    this.canFly = canFly;
  }
  says() {
    console.log(`Birds dont like to talk`);
  }
}
const duck = new Bird("duck", "quack", true);
duck.says();

//////////////////////////////////
// Class properties
// ES 2019
class Counter {
  count = 1;
  inc = () => {
    this.count += Counter.incrementStep;
    console.log(this.count);
  };

  static incrementStep = 2;

  static imcementAll = function(arr) {
    arr.array.forEach(c => c.inc());
  };
}

const cnt = new Counter();
console.log(cnt.count);
cnt.inc();
setTimeout(cnt.inc, 1000);

/////////////////////////
// Modules
 
