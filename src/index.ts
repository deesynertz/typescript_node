// import mysqli from 'mysqli';

interface Params {
  a: number,
  b: number
}

const add = (x: Params) => {
  return x.a + x.b;
};


console.log(add({ a: 1, b: 2 }));

console.log("Typescript is working !!!");
console.log("and now you can see it is usinf dev ");
