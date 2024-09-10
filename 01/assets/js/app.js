const a = "2.5";
const b = 4;

console.log(a, b);
console.log(typeof a);
console.log(typeof b);

let c = Number(a) + Number(a);
let d = Number(a) + b;
let e = a - b;
let f = b - b;
let g = a / b;
let h = a * b;
let i = a % b;

const results = [a, b, c, d, e, f, g, h, i];

results.map((result) => {
  if (result >= 20) {
    console.log(`operacja większa od 20. Wynik to ${result}`);
  } else {
    console.log(`operacja mniejsza od 20. Wynik to ${result}`);
  }
});
