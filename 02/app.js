/* rozwiązanie z pętlą for */

let givenNumber = prompt("Podaj liczbę!", 4);
if (givenNumber > 0 && givenNumber <= 9) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${i} * ${givenNumber} = ${i * givenNumber}`);
  }
} else {
  alert("Podaj liczbę z zakresu 1 - 9");
  window.location.reload();
}
/* rozwiązanie z pętlą while  */

let a = prompt("Podaj podstawę", 1);
let n = prompt("Podaj wykładnik", 2);
let result;
let i = 0;
let str = "";

if (!isNaN(a) && !isNaN(n)) {
  result = 1;
  while (i < n) {
    result = result * a;
    str = a + " * " + str;
    i++;
  }
  console.log(`Wynik potęgowania: ${str.slice(0, -2)}= ${result}`);
} else {
  alert("Wprowadź wartości liczbowe");
  window.location.reload();
}
